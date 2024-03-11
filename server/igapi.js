const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQWRQVEFFT0lGYzhST1VmeWJ2SlZAkTlcxSW1Tc1dZAcHZA2dWU5Qkdtcjdtam90NWlHekN3U1BqRmUycWZACc0RnR3A0Qy1xSzg5S1ZAfd01lR1pxZAmdncGFyZA3BTc09XMExsM0NEazlVQVEzZA0RIeGpfaHBQWmVTZAm8ZD`;
const tester = "https://dummyjson.com/products/1";

const bruh = async () => {
  const response = await fetch(url);
  const data = response.json();
  console.log(data);
};
bruh();
