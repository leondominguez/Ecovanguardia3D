import React, { useState, useEffect, useRef } from 'react';
import { Html } from '@react-three/drei';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';

const ChatComponent = ({ position, distanceFactor, onVisibilityChange, visible }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatVisible, setChatVisible] = useState(visible);
  const [isFirstInteraction, setIsFirstInteraction] = useState(true); // Estado para controlar la primera interacción
  const chatRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setChatVisible(false);
        onVisibilityChange(false);
      }
    };

    if (chatVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [chatVisible, onVisibilityChange]);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { sender: 'user', text: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      let aiMessage;
      if (isFirstInteraction) {
        // Primera interacción: mensaje específico
        aiMessage = { sender: 'ai', text: 'Soy el gran sabio de la isla y responderé a tus preguntas.' };
        setIsFirstInteraction(false);
      } else {
        // Interacciones posteriores: llamada a la API de Mistral AI
        const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_MISTRAL_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'mistral-large-latest',
            temperature: 0.9, // Ajustar la temperatura a un valor más alto
            top_p: 0.9, // Ajustar top_p para obtener respuestas más detalladas
            max_tokens: 8096, // Ajustar el número máximo de tokens a un valor razonable
            stream: false,
            stop: ["\n"],
            random_seed: 0,
            messages: updatedMessages.map(msg => ({ role: msg.sender === 'user' ? 'user' : 'assistant', content: msg.text })),
            response_format: { type: 'text' },
            tools: [
              {
                type: 'function',
                function: {
                  name: 'string',
                  description: '',
                  parameters: {},
                },
              },
            ],
            tool_choice: 'auto',
            presence_penalty: 0,
            frequency_penalty: 0,
            n: 1,
            safe_prompt: false,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error al llamar a la API de Mistral AI:', errorData);
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        if (!data.choices || data.choices.length === 0) {
          throw new Error('No choices returned from API');
        }

        aiMessage = { sender: 'ai', text: data.choices[0].message.content };
      }

      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error al llamar a la API de Mistral AI:', error);
      const errorMessage = { sender: 'ai', text: 'Lo siento, hubo un error al procesar tu solicitud.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    setChatVisible(true);
    onVisibilityChange(true);
  };

  const handleAcceptClick = () => {
    setChatVisible(false);
    onVisibilityChange(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Html position={position} distanceFactor={distanceFactor} style={{ pointerEvents: "auto" }}>
      {visible && (
        <>
          <button
            onClick={handleButtonClick}
            style={{
              display: "flex",
              margin: "10px auto",
              padding: "10px",
              fontSize: "90px", // Tamaño del ícono
              cursor: "pointer",
              backgroundColor: "rgba(255, 255, 255, 0.5)", // Fondo translúcido
              border: "none",
              borderRadius: "50%",
              width: "90px",
              height: "90px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon icon={faAtom} color="yellow" />
          </button>
          {chatVisible && (
            <div
              ref={chatRef}
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                fontSize: '14px', // Tamaño del texto del tooltip
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '20px',
                background: 'linear-gradient(10deg, rgb(255, 215, 0) 0%, rgb(231 231 231) 100%)', // Fondo degradado
                border: '2px solid rgb(255 255 255)',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
                minHeight: '500px', // Altura mínima del tooltip
                maxHeight: '700px', // Altura máxima del tooltip
                maxWidth: '600px', // Ancho máximo del tooltip
                minWidth: '300px', // Ancho mínimo del tooltip
                width: 'auto', // Ancho automático del tooltip
                textAlign: 'center', // Alineación del texto
                whiteSpace: 'pre-wrap', // Ajuste del texto dentro del contenedor
              }}
            >
              <div><h3>EL Gran Sabio</h3></div>
              <div style={{ flexGrow: 1, overflowY: 'auto', marginBottom: '10px', width: '100%' }}>
                {messages.map((msg, index) => (
                  <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                    <p style={{ margin: '5px 0', fontWeight: msg.sender === 'user' ? 'bold' : 'normal', fontSize: '11px', wordBreak: 'break-word' }}>{msg.text}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'auto' }}>
                <input
                  type="text"
                  value={input}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setInput(e.target.value)}
                  style={{ width: 'calc(80% - 10px)', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '10px' }}
                />
                <button onClick={handleSendMessage} style={{ width: '50%', padding: '6px', marginBottom: '10px', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
                  {loading ? 'Enviando...' : 'Enviar'}
                </button>
                <button onClick={handleAcceptClick} style={{ width: '20%', padding: '6px', borderRadius: '4px', backgroundColor: 'red', color: 'white', border: 'none' }}>
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </Html>
  );
};

export default ChatComponent;