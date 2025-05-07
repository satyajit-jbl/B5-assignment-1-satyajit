function formatString(input: string, toUpper?: boolean): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }
  
  console.log(formatString("Hello"));
  console.log(formatString("Hello", true));
  console.log(formatString("Hello", false));
  