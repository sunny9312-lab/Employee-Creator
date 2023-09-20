const priorities = ["low", "medium", "high", "very high"];

export const rankPriority = (priority) => {
  return priorities.indexOf(priority);
};

export default priorities;
