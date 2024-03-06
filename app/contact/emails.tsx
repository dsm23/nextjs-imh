import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import type { Values } from "./schema";

export const EmailTemplate = ({ name, email, message }: Values) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>UK distributor of power quality tools.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading as="h1">Hello IMH</Heading>
        <Hr style={hr} />
        <Text style={paragraph}>
          Hi from <strong>{name}</strong>,
        </Text>
        <Text style={paragraph}>
          My email address is <strong>{email}</strong>,
        </Text>
        {message.split("\n").map((str) => (
          <Text key={str} style={paragraph}>
            {str}
          </Text>
        ))}
        <Text style={paragraph}>
          Best,
          <br />
          {name}
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          IMH Technologies Ltd, 8 Roach View Purdeys Industrial Estate,
          Rochford, Essex, SS4 1LB
        </Text>
      </Container>
    </Body>
  </Html>
);

EmailTemplate.PreviewProps = {
  name: "David Murdoch",
  email: "dsm@example.com",
  message: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis velit ac ligula mollis dapibus. Cras lacinia sapien a eleifend sodales. Nullam tempor, libero vitae congue dignissim, purus arcu fringilla quam, vitae interdum lacus risus sit amet turpis. Proin dolor tortor, gravida in magna sit amet, lacinia pharetra sapien. In auctor ante id sapien varius euismod. Phasellus a ante purus. Mauris mollis massa ut consectetur tincidunt. Integer quis convallis orci, in eleifend nulla. Maecenas scelerisque ante sit amet ex condimentum consequat. Nunc in dignissim felis. Vestibulum a nisl dignissim, maximus mauris quis, mollis urna. Curabitur aliquam molestie est vel volutpat. Curabitur ut ligula leo. Aenean vestibulum augue eget velit accumsan congue. Cras hendrerit, sem ut venenatis elementum, odio tortor mattis augue, at consectetur nunc sem sed risus. Pellentesque at faucibus sem.

Vestibulum sit amet enim finibus, scelerisque ante et, pretium justo. Nullam quis nulla ligula. Etiam eros leo, ultricies a porttitor at, interdum ut turpis. Pellentesque porta, turpis vitae eleifend luctus, velit quam euismod velit, in luctus ipsum mauris ut felis. Morbi sodales egestas tellus, sed aliquet lorem blandit sit amet. Praesent eros est, tempus a neque at, semper euismod diam. Vivamus eget mi a mauris blandit commodo sit amet ut felis. Nulla egestas feugiat ex a accumsan. Ut mollis lectus dui, at rhoncus dolor rhoncus eu. Maecenas sollicitudin pretium dictum. Aliquam eu finibus massa, sed finibus nisl. Nunc efficitur dui consectetur orci finibus tincidunt ac vel dolor. Morbi a dolor a lorem tincidunt interdum. Pellentesque suscipit fermentum ex, euismod porta augue vulputate eu. Duis efficitur enim non quam ultricies posuere. Suspendisse urna orci, volutpat sed tempus sed, sagittis et nisi.

Donec lacinia dui et rhoncus tristique. Vestibulum a sapien sodales, elementum est non, malesuada ligula. Sed scelerisque ipsum id sapien sollicitudin, non scelerisque est dapibus. Nulla malesuada porttitor facilisis. Aenean venenatis placerat augue, nec rhoncus ex rhoncus nec. Nulla non justo eu leo tempor euismod eget et leo. Aenean eget arcu magna. Aliquam ut nisi id dui consectetur posuere. Quisque vitae urna ut magna ultricies lobortis. Cras nec purus pulvinar, lobortis lorem sagittis, pulvinar ligula. Maecenas non nulla sit amet tellus rhoncus maximus vel id turpis. Nunc est metus, maximus euismod venenatis ut, laoreet quis enim. Donec aliquet accumsan varius. Praesent euismod scelerisque ligula. Aliquam non massa vitae arcu congue interdum vel vitae magna.

Nam bibendum vel lorem id semper. Nam aliquam aliquet aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi consequat purus a ligula pretium maximus. Nulla ac nisi purus. Curabitur justo magna, varius at tincidunt sit amet, mollis eget erat. Vivamus et tempor nulla. Pellentesque ultricies at mi at iaculis.

Aliquam ullamcorper congue erat eu consectetur. Quisque facilisis velit id sem semper gravida. Sed porta id enim vitae vestibulum. Nunc vulputate neque non velit suscipit aliquet. Donec elementum ullamcorper diam, vitae dictum ligula mattis at. Cras sit amet nibh ac nunc fermentum condimentum ut eget tellus. Vestibulum dapibus accumsan facilisis. Aliquam quam mauris, tincidunt id dictum nec, facilisis a ante. Mauris fringilla odio in elit pretium luctus. Aenean lorem purus, vestibulum in imperdiet a, sagittis at lectus. Proin a sagittis purus, id commodo augue. Proin vitae aliquam nisl, nec mollis ligula. Pellentesque lobortis ultrices hendrerit.`,
} satisfies Values;

export default EmailTemplate;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "20px auto",
  padding: "20px 20px 48px",
  backgroundColor: "#ffffff",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
