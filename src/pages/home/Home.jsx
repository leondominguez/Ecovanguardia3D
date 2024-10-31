

function Home() {
  const [modalData, setModalData] = useState(null);

  // Función para abrir el modal con datos específicos
  const openModal = (title, content, ModelComponent) => {
    setModalData({ title, content, ModelComponent });
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalData(null);
  };

  return (

