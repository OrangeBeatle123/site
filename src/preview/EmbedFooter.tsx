import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"
import { Theme } from "../core/themes"
import { Footer } from "../message/Message"
import { formatTimestamp } from "./formatTimestamp"

const Container = styled.div<{ hasThumbnail?: boolean }>`
  margin: 8px 0 0;

  display: flex;
  align-items: center;

  grid-row: auto / auto;
  grid-column: 1 / 2;

  ${({ hasThumbnail }) =>
    hasThumbnail &&
    css`
      grid-column: 1 / 3;
    `}
`

const FooterImage = styled.img`
  width: 20px;
  height: 20px;

  margin: 0 8px 0 0;

  object-fit: contain;
  border-radius: 50%;
`

const FooterText = styled.span<{}, Theme>`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text.muted};
  line-height: 1rem;
`

const FooterSeparator = styled.span<{}, Theme>`
  display: inline-block;
  margin: 0 4px;

  font-weight: 700;
  color: ${({ theme }) => theme.backgroundModifier.accent};
`

type Props = {
  footer?: Footer
  timestamp?: string
  hasThumbnail?: boolean
}

export default function EmbedFooter(props: Props) {
  const { footer = {}, timestamp, hasThumbnail } = props
  const { text, iconUrl } = footer

  return (
    <Container hasThumbnail={hasThumbnail}>
      {iconUrl && <FooterImage src={iconUrl} alt="Footer image" />}
      <FooterText>
        {text}
        {text && timestamp && <FooterSeparator>•</FooterSeparator>}
        {timestamp && formatTimestamp(timestamp)}
      </FooterText>
    </Container>
  )
}
