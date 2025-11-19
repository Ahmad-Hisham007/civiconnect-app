export default function trimContent(para) {
  if (typeof para !== "string") return para;
  return para.split("", 120);
}
