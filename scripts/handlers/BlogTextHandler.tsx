import Link from "next/link";

export function FormatText(string: string) {
  /// Split by [a][/a]
  let parts = string.split(/\[a\](.*?)\[\/a\]/g);

  let stringRtn = parts.map((part, index) => {
    /// If odd, run function to create an achor tag. Else, return string.
    if (index % 2 !== 0) {
      let linkSplit = part.trim().split(/link=\(([^)]+)\)\s*text=\(([^)]+)\)/g);
      linkSplit.filter(item => item.trim() !== '');
      const [link, text] = [linkSplit[1], linkSplit[2]];
      return <Link key={index} href={link} target="_blank">{text}</Link>;
    } else {
      let partsForBold = part.split(/\[b\](.*?)\[\/b\]/g);
      let boldReturn = partsForBold.map((part2, index2) => {
        /// If odd, run function to create an achor tag. Else, return string.
        if (index2 % 2 !== 0) {
          return <b key={index2}>{part2}</b>;
        } else {return part2;}
      });
      return boldReturn;
    
    }
  });

  return stringRtn;
}