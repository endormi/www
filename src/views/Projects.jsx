import React from 'react'
import PropTypes from 'prop-types'
import { Divider, DividerMiddle } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const Projects = ({ children, offset }) => (
  <>
    <DividerMiddle speed={-0.2} offset={`${offset}.1`} factor={2} />
    <Content speed={0.4} offset={`${offset}.2`} factor={2}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
      <UpDown>
        <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
        <SVG icon="triangle" hiddenMobile width={8} stroke={colors.white} left="25%" top="5%" />
        <SVG icon="circle" hiddenMobile width={6} fill={colors.white} left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} fill={colors['grey-darkest']} left="25%" top="90%" />
        <SVG icon="triangle" hiddenMobile width={16} stroke={colors.white} left="13%" top="75%" />
        <SVG icon="circle" hiddenMobile width={6} fill={colors.white} left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} fill={colors.white} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors.grey} left="8%" top="40%" />
      <SVG icon="box" hiddenMobile width={6} fill={colors.white} left="10%" top="10%" />
      <SVG icon="hexa" hiddenMobile width={16} stroke={colors.white} left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors.white} left="80%" top="70%" />
    </Divider>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
