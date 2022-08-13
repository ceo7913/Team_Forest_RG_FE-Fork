import { TypographyProps } from "@mui/material";
import Text from "@/components/Text";
import { Container, TextWrapper } from "./WithLabel.style";
import { CustomTypographyProps } from "../Text/Text";

interface WithLabelProps {
  variant?: TypographyProps["variant"];
  label: string;
  caption?: string;
  children: any;
  wd?: number;
  isRequired?: boolean;
  labelProps?: Partial<CustomTypographyProps>;
}

const WithLabel = ({
  variant = "h5",
  label,
  children,
  caption,
  wd,
  isRequired,
  labelProps,
  ...props
}: WithLabelProps) => {
  return (
    <Container width={wd} {...props}>
      <TextWrapper>
        <Text variant={variant} {...labelProps}>
          {label}
        </Text>
        {isRequired && <Text textStyle={{ color: "red" }}>&nbsp;*</Text>}
        {caption && <Text variant="caption">&nbsp;{caption}</Text>}
      </TextWrapper>
      {children}
    </Container>
  );
};

export default WithLabel;
