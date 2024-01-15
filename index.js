// code your solution here
const superbowlWin = (record) => {
  const winningRecord = record.find((entry) => entry.result === "W");

  return winningRecord ? winningRecord.year : undefined;
};

const winningYear = superbowlWin(record);
console.log(winningYear);
