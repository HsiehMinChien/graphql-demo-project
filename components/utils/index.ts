export function confirmIsSelected(type: string, selectedTypes: Array<string>) {
  const setSelectedType = new Set(selectedTypes);
  return setSelectedType.has(type);
}
