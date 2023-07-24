export default function(str: string): string {
  return str.replace(/([\d]),([\d])/, "$1 $2")
}
