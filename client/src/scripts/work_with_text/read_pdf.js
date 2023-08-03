const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js';
document.head.appendChild(script);


// Экспортируем функцию pdfFormat, которая обрабатывает PDF-файлы
export async function pdfFormat(userFile, element) {
    // Создаем новый экземпляр FileReader
    const reader = new FileReader();
  
    // Назначаем обработчик события, который выполнится после загрузки файла
    reader.onload = async function (event) {
      // Получаем содержимое файла в виде бинарных данных
      const fileContent = event.target.result;
  
      // Загружаем worker для pdf.js
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.js';
  
      // Инициализируем pdf.js и загружаем документ
      const pdf = await pdfjsLib.getDocument({ data: fileContent }).promise;
  
      // Загружаем первую страницу
      const page = await pdf.getPage(1);
  
      // Извлекаем текстовое содержимое страницы
      const textContent = await page.getTextContent();
  
      let pdfText = '';
      textContent.items.forEach(function (textItem) {
        pdfText += textItem.str + ' ';
      });
  
      // Отображаем текстовое содержимое на странице
      element.textContent = pdfText;
    };
  
    // Читаем содержимое файла в формате Data URL (base64)
    reader.readAsArrayBuffer(userFile);
  }
  
