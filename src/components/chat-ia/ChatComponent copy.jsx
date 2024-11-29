import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';

const ChatComponent = ({ position, distanceFactor }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Verificar que la variable de entorno se está cargando correctamente
    console.log('Mistral API Key:', import.meta.env.VITE_MISTRAL_API_KEY);
  }, []);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);
    setInput('');
    setLoading(true);

    try {
      // Llamar a la API de Mistral AI
      const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_MISTRAL_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'mistral-large-latest',
          temperature: 1.5,
          top_p: 1,
          max_tokens: 50,
          stream: false,
          stop: ["\n"], // Ajustado a una lista de cadenas
          random_seed: 0,
          messages: [{ role: 'user', content: `Responde en español: ${input}` }],
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

      const aiMessage = { sender: 'ai', text: data.choices[0].message.content };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error al llamar a la API de Mistral AI:', error);
      const errorMessage = { sender: 'ai', text: 'Lo siento, hubo un error al procesar tu solicitud.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Html position={position} distanceFactor={distanceFactor} style={{ pointerEvents: "auto" }}>
      <div style={{ width: '300px', padding: '10px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '10px' }}>
          {messages.map((msg, index) => (
            <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
              <p style={{ margin: '5px 0', fontWeight: msg.sender === 'user' ? 'bold' : 'normal' }}>{msg.text}</p>
            </div>
          ))}
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: 'calc(100% - 22px)', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button onClick={handleSendMessage} style={{ width: '100%', padding: '10px', marginTop: '10px', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </Html>
  );
};

export default ChatComponent;
