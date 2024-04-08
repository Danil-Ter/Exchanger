'use client'

function Pop() {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-950 bg-opacity-50">
      <div className="text-center">
        <div className="text-orange-600 text-4xl">Тільки сьогодні найкращий курс</div>
        <button onClick={reloadPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
           конвектурувати валюту
        </button>
      </div>
    </div>
  );
}

export default Pop;
