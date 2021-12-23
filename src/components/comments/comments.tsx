import React, { FC } from "react";
import styled from "@emotion/styled";
import CommentsItem from "./commentsItem";
import { getComments } from "../../api/apiHandler";

interface CommentsProps {
  key: string;
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

const Comments: FC<CommentsProps> = ({ key, width, theme }) => {
  const [list, setList] = React.useState<any>([]);

  React.useEffect(() => {
    const setData = async (key: string, issueNumber: number) => {
      const data = await getComments(key, issueNumber);
      console.log(data);
      if (data) setList(data);
    };

    setData(key, 9);
  }, []);

  return (
    <CommentsLayout width={width} theme={theme}>
      <h2>Comments</h2>
      <CommentsList>
        {list.map((comment: any, idx: number) => (
          <CommentsItem
            key={`comment #${idx} by ${comment.user.login}`}
            name={comment.user.login}
            date={comment.created_at}
            avatarUrl={comment.user.avatar_url}
            likeCount={comment.reactions.total_count}
            body={comment.body}
            theme={theme}
          />
        ))}
      </CommentsList>
    </CommentsLayout>
  );
};

export default Comments;
