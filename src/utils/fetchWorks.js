export async function loadWorks() {
  const response = await fetch("./data/works.json");
  return await response.json();
}
//"./data/works.json";
