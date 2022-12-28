import ReactDOM from 'react-dom';

interface BackdropProps {
  hideModal: () => void;
}

const Backdrop = ({ hideModal }: BackdropProps) => {
  return ReactDOM.createPortal(
    <div
      onClick={hideModal}
      className="h-screen w-screen bg-backdrop fixed top-0 left-0 z-10 cursor-pointer"
    ></div>,
    document.getElementById('backdrop') as HTMLElement
  );
};

export default Backdrop;
