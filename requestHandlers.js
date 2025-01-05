const start = () => {
    console.log('request handlers "start" was start');
    return "hello start";
};
const upload = () => {
    console.log('request handlers "upload" was start');
    return "hello upload";
};

exports.start = start;
exports.upload = upload;
