import {
  updateElementContent,
  showProgressBar,
  hideProgressBar,
  changeValueProgressBar,
} from "../dom/dom_utils.js";

const script = document.createElement("script");
script.src =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js";
document.head.appendChild(script);

export async function pdfFormat(userFile, element) {
  const reader = new FileReader();

  reader.onload = async function (event) {
    const fileContent = event.target.result;

    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.js";
    const pdf = await pdfjsLib.getDocument({ data: fileContent }).promise;
    let pdfText = "";

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      showProgressBar();
      const page = await pdf.getPage(pageNumber);
      const textContent = await page.getTextContent();

      textContent.items.forEach(function (textItem) {
        pdfText += textItem.str + " ";
        changeValueProgressBar(pageNumber, pdf.numPages);
      });
      hideProgressBar();
      updateElementContent(pdfText);
    }
  };
  reader.readAsArrayBuffer(userFile);
}
