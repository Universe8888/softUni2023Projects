function extractDetails(filePath) {

    const fileSegment = filePath.split('\\').pop();

    const fileParts = fileSegment.split('.');

    const extension = fileParts.pop();

    const fileName = fileParts.join('.');

    console.log('File name:', fileName);

    console.log('File extension:', extension);
}

extractDetails('C:\\Internal\\training-internal\\Template.pptx');