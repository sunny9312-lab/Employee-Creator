import React from "react";
import dummy from "../../db/data.json";

const Day = () => {
  const day = 2;
  const wordList = dummy.words.filter((word) => word.day === day);
  console.log(wordList);

  return (
    <>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
