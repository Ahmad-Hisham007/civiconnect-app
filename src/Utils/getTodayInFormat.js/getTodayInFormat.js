function getTodayInFormat() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}
export default getTodayInFormat;
