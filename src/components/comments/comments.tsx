import React, { FC } from "react";
import styled from "@emotion/styled";

import { getComments } from "../../api/apiHandler";
import CommentsItem from "./commentsItem";
import CommentsWrite from "./commentsWrite";

interface CommentsProps {
  key: string | undefined;
  issueNumber: number;
  width?: string;
  theme?: string;
}

interface LayoutStyleProps {
  width?: string;
  theme?: string;
}

const CommentsLayout = styled.div<LayoutStyleProps>`
  min-width: 384px;
  width: ${(props) => (props.width ? props.width : "60%")};
  background-color: ${(props) =>
    props.theme === "dark" ? "#141a1f" : "rgba(0,0,0,0)"};
  color: ${(props) => (props.theme === "dark" ? "#fdffff" : "black")};
  padding: 0.75rem;
  margin: 0 auto;
`;

const CommentsList = styled.ul`
  width: 100%;
  list-style: none;
  padding-top: 1rem;
  padding-left: 0;
  margin: 0;
  border-top: 1px solid #ddd;
`;

const Comments: FC<CommentsProps> = ({ key, issueNumber, width, theme }) => {
  const [list, setList] = React.useState<any>([]);

  React.useEffect(() => {
    const setData = async (issueNumber: number) => {
      const data = await getComments(issueNumber);
      console.log(data);
      if (data) setList(data);
    };

    setData(issueNumber);
  }, []);

  return (
    <CommentsLayout width={width} theme={theme}>
      <h2>Comments</h2>
      <CommentsList>
        {list.map((comment: any, idx: number) => (
          <CommentsItem
            key={`comment#${idx}`}
            authKey={key}
            id={comment.id}
            name={comment.user.login}
            date={comment.created_at}
            avatarUrl={comment.user.avatar_url}
            likeCount={comment.reactions.total_count}
            body={comment.body}
            theme={theme}
          />
        ))}
      </CommentsList>
      <CommentsWrite />
    </CommentsLayout>
  );
};

export default Comments;
