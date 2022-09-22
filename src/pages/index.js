// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/layout'
import {
  Subtitle,
  Title,
  DescriptionView,
  Description,
  DescriptionText,
  DescriptionTitleGroup,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <Layout data={this.props.data}>
        <DescriptionView>
          <DescriptionTitleGroup>
            <Subtitle>Welcome To</Subtitle>
            <Title>Progression at Upp 🎉</Title>
          </DescriptionTitleGroup>
          <Description>
            <DescriptionText>
              This is where we keep the progression frameworks we use at Upp.
            </DescriptionText>
            <DescriptionText>
              Progression frameworks are tools that help us evaluate and pay our
              staff consistently, and help people understand how to progress in
              their work.
            </DescriptionText>
            <DescriptionText>
              We&apos;ve put them here for everyone at Upp (and anyone in the
              world!) to use.
            </DescriptionText>
            <DescriptionText>
              We&apos;ll be adding more frameworks as we build them, and
              updating existing ones as we grow, so expect things to change
              around here!
            </DescriptionText>
            <DescriptionText>
              This site, along with all our progression frameworks, are open
              source. That means you can contribute to the development of this
              site or our progression frameworks, and use both as inspiration
              for your own projects!
            </DescriptionText>
            <DescriptionText>
              To get involved, go to{' '}
              <a href="https://github.com/volo-ai/progression-framework">
                <FontAwesomeIcon icon={faGithub} /> Upp Progression Framework.
              </a>
            </DescriptionText>
            <DescriptionText>
              Take a look around and let us know what you think! 🚀
            </DescriptionText>
          </Description>
          <DescriptionTitleGroup>
            <Title>Principles</Title>
          </DescriptionTitleGroup>
          <Description>
            <Subtitle>Ubiquitous Language</Subtitle>
            <DescriptionText>
              We strive to speak the same language from sales/marketing to
              engineering team.
            </DescriptionText>
            <Subtitle>Small Delivery, Good enough is good enough</Subtitle>
            <DescriptionText>
              A bias towards delivery, action with periodic times for reflection
              and regrouping.
            </DescriptionText>
            <Subtitle>Empowered & Engaged Engineers</Subtitle>
            <DescriptionText>
              Decisions made at point of building, the team owns the problem,
              the measurements, the solution and the monitoring.
            </DescriptionText>
            <Subtitle>Remote & Asynchronous</Subtitle>
            <DescriptionText>
              A bias towards over communicating, striving to be clear and
              concise using appropriate medium (Written word, Video, Audio, Zoom
              Call, Face-to-face).
            </DescriptionText>
            <Subtitle>No superheroes</Subtitle>
            <DescriptionText>
              Success is <strong>upskilling the team</strong>, allowing the{' '}
              <strong>team to move faster</strong>.
            </DescriptionText>
            <Subtitle>Keep it simple</Subtitle>
            <DescriptionText>
              Simplicity is not where you start, simplicity is where we are
              trying to get to (refactoring, abstracting, making it simple).
            </DescriptionText>
            <Subtitle>Appropriate tools and methods for the job</Subtitle>
            <DescriptionText>
              The way we treat a core part of the system (orders, products,
              campaign stats services) vs a more experimental part should and
              will be different.
            </DescriptionText>
          </Description>
        </DescriptionView>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            sidebarTitle
            sidebarGroup
          }
        }
      }
    }
  }
`
