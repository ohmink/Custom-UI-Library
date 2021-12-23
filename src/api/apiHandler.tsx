import axios from "axios";

export async function getComments(key: string, issueNumber: number) {
  try {
    const res = await axios.get(
      `https://api.github.com/repos/ohmink/ohmink.github.io/issues/${issueNumber}}/comments`,
      {
        headers: {
          Authorization: key,
        },
      }
    );

    return res.status ? res.data : [];
  } catch (error) {
    console.log(error);
  }
}
