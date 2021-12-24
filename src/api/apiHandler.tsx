import axios from "axios";

export async function getComments(issueNumber: number) {
  try {
    const res = await axios.get(
      `https://api.github.com/repos/ohmink/ohmink.github.io/issues/${issueNumber}}/comments`
    );

    return res.status ? res.data : [];
  } catch (error) {
    console.log(error);
  }
}

export async function updateComment(
  key: string | undefined,
  commentId: number,
  content: string
) {
  try {
    const res = await axios.patch(
      `https://api.github.com/repos/ohmink/ohmink.github.io/issues/comments/${commentId}`,
      {
        headers: {
          Authorization: key,
          Accept: "application/vnd.github.v3+json",
        },
        body: {
          content,
        },
      }
    );

    return res.status ? res.data : [];
  } catch (error) {
    console.log(error);
  }
}
