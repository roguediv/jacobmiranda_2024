'use client'
type Props = {
  className?: string;
  onDelete: () => void; // Callback function to handle the delete action
};

const SvgDelete: React.FC<Props> = ({ className = '', onDelete}) => {
  const handleDeleteClick = () => {
    onDelete(); // Call the callback function to handle delete action in the parent component
  };

  return (
    <button className={`SvgTrash ${className}`} onClick={handleDeleteClick}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" >
        <g><g><path fill="#000000" d="M235.7,49.4h-39V29.5c0-10.8-8.7-19.5-19.5-19.5H78.8c-10.8,0-19.5,8.7-19.5,19.5v20H20.3C14.6,49.4,10,54,10,59.7C10,65.4,14.6,70,20.3,70l215.4,0c5.7,0,10.3-4.6,10.3-10.3C246,54,241.4,49.4,235.7,49.4z M80,40.7c0-5.6,4.5-10.1,10.1-10.1H166c5.6,0,10.1,4.5,10.1,10.1v8.7l-96,0L80,40.7L80,40.7z"/><path fill="#000000" d="M105,206.5c5.7,0,10.3-4.6,10.3-10.3l0-97.2c0-5.7-4.6-10.3-10.3-10.3S94.7,93.3,94.7,99l0,97.2C94.7,201.9,99.3,206.5,105,206.5z"/><path fill="#000000" d="M150.7,206.5c5.7,0,10.3-4.6,10.3-10.3l0-97.2c0-5.7-4.6-10.3-10.3-10.3c-5.7,0-10.3,4.6-10.3,10.3l0,97.2C140.4,201.9,145,206.5,150.7,206.5z"/><path fill="#000000" d="M206.7,99c0-5.7-4.6-10.3-10.3-10.3s-10.3,4.6-10.3,10.3v6.6l0,0v109.7c0,5.6-4.5,10.1-10.1,10.1H79.7c-5.6,0-10.1-4.5-10.1-10.1V106.6h0V99c0-5.7-4.6-10.3-10.3-10.3C53.6,88.7,49,93.3,49,99v7.6l0,0v120c0,10.8,8.7,19.5,19.5,19.5h118.8c10.8,0,19.5-8.7,19.5-19.5V105.6h0V99z"/></g></g>
      </svg>
    </button>
  );
};

export default SvgDelete;