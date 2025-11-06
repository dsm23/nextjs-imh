import type { FunctionComponent, HTMLAttributes } from "react";
import type { Metadata } from "next";
import Container from "~/components/container";
import Paragraph from "~/components/paragraph";
import { cn } from "~/utilities/ui";

export function generateMetadata(): Metadata {
  return {
    title: `IMH | Equality, diversity, and inclusion policy`,
    description: "IMH's inclusion policy",
    openGraph: {
      title: `IMH | Equality, diversity, and inclusion policy`,
      description: "IMH's inclusion policy",
    },
  };
}

const H2: FunctionComponent<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => (
  <h2
    {...props}
    className={cn("mt-4 text-2xl font-medium text-gray-900", className)}
  />
);

const Ul: FunctionComponent<HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...props
}) => (
  <ul {...props} className={cn("my-2 list-outside list-disc", className)} />
);

const Ol: FunctionComponent<HTMLAttributes<HTMLOListElement>> = ({
  className,
  ...props
}) => (
  <ol {...props} className={cn("my-2 list-outside list-decimal", className)} />
);

const Li: FunctionComponent<HTMLAttributes<HTMLLIElement>> = ({
  className,
  ...props
}) => <li {...props} className={cn("mt-2 ml-8", className)} />;

const Page: FunctionComponent = () => (
  <Container>
    <article>
      <h1 className="my-8 text-2xl leading-tight font-bold tracking-tight md:text-4xl md:tracking-tighter">
        Equality, diversity, and inclusion policy
      </h1>
      <Paragraph>
        <strong>IMH Technologies Ltd</strong> is committed to encouraging
        equality, diversity, and inclusion among our workforce, and eliminating
        unlawful discrimination.
      </Paragraph>
      <Paragraph>
        The aim is for our workforce to be truly representative of all sections
        of society and our customers, and for each employee to feel respected
        and able to give their best.
      </Paragraph>

      <Paragraph>
        The organisation - in providing goods and/or services and/or facilities
        - is also committed against unlawful discrimination of customers or the
        public.
      </Paragraph>

      <H2>Our policy's purpose</H2>

      <Paragraph>This policy's purpose is to:</Paragraph>

      <Ol>
        <Li>
          Provide equality, fairness and respect for all in our employment,
          whether temporary, part- time or full-time
        </Li>
        <Li>
          Not unlawfully discriminate because of the Equality Act 2010 protected
          characteristics of:
          <Ul>
            <Li>age</Li>
            <Li>disability</Li>
            <Li>gender reassignment</Li>
            <Li>marriage or civil partnership</Li>
            <Li>pregnancy and maternity</Li>
            <Li>
              race (including colour, nationality, and ethnic or national
              origin)
            </Li>
            <Li>religion or belief</Li>
            <Li>sex</Li>
            <Li>sexual orientation</Li>
          </Ul>
        </Li>
        <Li>
          Oppose and avoid all forms of unlawful discrimination. This includes
          in:
          <Ul>
            <Li>pay and benefits</Li>
            <Li>terms and conditions of employment</Li>
            <Li>dealing with grievances and discipline</Li>
            <Li>dismissal</Li>
            <Li>redundancy</Li>
            <Li>leave for parents</Li>
            <Li>requests for flexible working</Li>
            <Li>
              selection for employment, promotion, training or other
              developmental opportunities
            </Li>
          </Ul>
        </Li>
      </Ol>

      <H2>Our commitments</H2>

      <Paragraph>The organisation commits to:</Paragraph>

      <Ol>
        <Li>
          Encourage equality, diversity and inclusion in the workplace as they
          are good practice and make business sense
        </Li>

        <Li>
          <Paragraph>
            Create a working environment free of bullying, harassment,
            victimisation and unlawful discrimination, promoting dignity and
            respect for all, and where individual differences and the
            contributions of all staff are recognised and valued.
          </Paragraph>

          <Paragraph>
            This commitment includes training managers and all other employees
            about their rights and responsibilities under the equality,
            diversity and inclusion policy. Responsibilities include staff
            conducting themselves to help the organisation provide equal
            opportunities in employment, and prevent bullying, harassment,
            victimisation and unlawful discrimination.
          </Paragraph>

          <Paragraph>
            All staff should understand they, as well as their employer, can be
            held liable for acts of bullying, harassment, victimisation and
            unlawful discrimination, in the course of their employment, against
            fellow employees, customers, suppliers and the public
          </Paragraph>
        </Li>
        <Li>
          <Paragraph>
            Take seriously complaints of bullying, harassment, victimisation and
            unlawful discrimination by fellow employees, customers, suppliers,
            visitors, the public and any others in the course of the
            organisation's work activities.
          </Paragraph>

          <Paragraph>
            Such acts will be dealt with as misconduct under the organisation's
            grievance and/or disciplinary procedures, and appropriate action
            will be taken. Particularly serious complaints could amount to gross
            misconduct and lead to dismissal without notice.
          </Paragraph>

          <Paragraph>
            Further, sexual harassment may amount to both an employment rights
            matter and a criminal matter, such as in sexual assault allegations.
            In addition, harassment under the Protection from Harassment Act
            1997 - which is not limited to circumstances where harassment
            relates to a protected characteristic - is a criminal offence.
          </Paragraph>
        </Li>
        <Li>
          Make opportunities for training, development and progress available to
          all staff, who will be helped and encouraged to develop their full
          potential, so their talents and resources can be fully utilised to
          maximise the efficiency of the organisation.
        </Li>

        <Li>
          Make decisions concerning staff being based on merit (apart from in
          any necessary and limited exemptions and exceptions allowed under the
          Equality Act).
        </Li>

        <Li>
          Review employment practices and procedures when necessary to ensure
          fairness, and also update them and the policy to take account of
          changes in the law.
        </Li>

        <Li>
          Monitor the make-up of the workforce regarding information such as
          age, sex, ethnic background, sexual orientation, religion or belief,
          and disability in encouraging equality, diversity and inclusion, and
          in meeting the aims and commitments set out in the equality, diversity
          and inclusion policy.
        </Li>
      </Ol>

      <Paragraph>
        Monitoring will also include assessing how the equality, diversity and
        inclusion policy, and any supporting action plan, are working in
        practice, reviewing them annually, and considering and taking action to
        address any issues.
      </Paragraph>

      <H2>Agreement to follow this policy</H2>

      <Paragraph>
        The equality, diversity and inclusion policy <u>is</u> fully supported
        by senior management.
      </Paragraph>

      <H2>Our disciplinary and grievance procedures</H2>

      <Paragraph>
        Details of the organisation's grievance and disciplinary policies and
        procedures can be found on request. This includes with whom an employee
        should raise a grievance - usually their line manager.
      </Paragraph>

      <Paragraph>
        Use of the organisation's grievance or disciplinary procedures does not
        affect an employee's right to make a claim to an employment tribunal
        within three months of the alleged discrimination.
      </Paragraph>
    </article>
  </Container>
);

export default Page;
