function getOrdinalNumber(number: number) {
  if (number === 1) {
    return ` ${number}st, `;
  }
  if (number === 2) {
    return ` ${number}nd, `;
  }
  if (number === 3) {
    return ` ${number}rd, `;
  }
  return ` ${number}th, `;
}

function formatDate(value: Date): string {
  const day = value.getDate();

  const transformedDate = value.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });

  return transformedDate.replace(" ", getOrdinalNumber(day));
}

console.log(formatDate(new Date()));
console.log(formatDate(new Date("2024-05-01")));
console.log(formatDate(new Date("2024-05-02")));
console.log(formatDate(new Date("2024-05-06")));
