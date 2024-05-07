function convertUnixTimestampToDateString(timestamp) {
  const date = new Date(timestamp * 1000);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDate = `${day}/${month < 10 ? "0" + month : month}/${year}`;

  return formattedDate; //  1715066894 => Output: "07/05/2024"
}

function convertDateStringToUnixTimestamp(dateString) {
  const parts = dateString.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  const date = new Date(year, month - 1, day);

  const timestamp = date.getTime() / 1000;

  return timestamp; // "07/05/2024" => Output: 1715068800
}

function convertDateToUnixTimestamp(dateObject) {
  const timestamp = dateObject.getTime() / 1000;

  return timestamp; // dateObject => Output: 1715066894
}

function convertDateStringToDateObject(dateString) {
  const parts = dateString.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);

  const dateObject = new Date(year, month, day);

  return dateObject; // "12/12/2003" => Output: Fri Dec 12 2003 00:00:00 GMT+0700 (Indochina Time)
}

export {
  convertUnixTimestampToDateString,
  convertDateStringToUnixTimestamp,
  convertDateToUnixTimestamp,
  convertDateStringToDateObject,
};
