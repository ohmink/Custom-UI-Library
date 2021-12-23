import React, { FC } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface CommentsItemProps {
  name: string;
  date: string;
  avatarUrl: string;
  likeCount: number;
  body: string;
  theme?: string;
}

interface ThemeProps {
  theme?: string;
}

const commentsItemStyle = css({
  display: "flex",
  flexDirection: "row",
  borderBottom: "1px solid #ddd",
  paddingBottom: "0.75rem",
  marginBottom: "1rem",
});

const commentsItemMainStyle = css({
  flex: 1,
});

const commentsItemTopStyle = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const commentsItemMiddleStyle = css({});

const commentsItemBottomStyle = css({
  display: "flex",
  flexDirection: "row",
  marginLeft: "0.75rem",
});

const H3 = styled.h3`
  margin: 0 0 0.25rem 0.75rem;
`;

const SmallText = styled.p<ThemeProps>`
  margin: 0 0 0.75rem 0.75rem;
  font-size: small;
  color: ${(props) => (props.theme === "dark" ? "#ddd" : "#9a9a9a")};
`;

const Text = styled.p`
  margin: 0 0 0.75rem 0.75rem;
`;

const Button = styled.button<ThemeProps>`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: small;
  color: ${(props) => (props.theme === "dark" ? "#ddd" : "#999")};
  padding: 0;
  margin-right: 0.75rem;
  text-decoration: underline;
`;

const CommentsItem: FC<CommentsItemProps> = (props) => {
  const date = new Date(props.date)
    .toLocaleDateString()
    .replace(/.\s/g, "-")
    .replace(".", "");
  return (
    <li css={commentsItemStyle}>
      <div>
        <img src={props.avatarUrl} alt="avatarImg" width={50} />
      </div>
      <div css={commentsItemMainStyle}>
        <div css={commentsItemTopStyle}>
          <H3>{props.name}</H3>
          <div>
            <Button theme={props.theme}>Edit</Button>
            <Button theme={props.theme}>Delete</Button>
          </div>
        </div>
        <div css={commentsItemMiddleStyle}>
          <SmallText theme={props.theme}>{date}</SmallText>
        </div>
        <div>
          <Text>{props.body}</Text>
        </div>
      </div>
    </li>
  );
};

export default CommentsItem;
