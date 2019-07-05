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
    <DividerMiddle
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      speed={-0.2}
      offset={`${offset}.1`}
      factor={2}
    />
    <Content speed={0.4} offset={`${offset}.2`} factor={2}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
      <UpDown>
        <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
        <SVG icon="upDown" width={8} fill={colors.blue} left="65%" top="20%" />
        <SVG icon="triangle" width={8} stroke={colors.blue} left="25%" top="5%" />
        <SVG icon="circle" hiddenMobile width={6} fill={colors.white} left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} fill={colors.pink} left="25%" top="90%" />
        <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="20%" />
        <SVG icon="circle" width={16} fill={colors.green} left="70%" top="90%" />
        <SVG icon="triangle" hiddenMobile width={16} stroke={colors.blue} left="13%" top="75%" />
        <SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} fill={colors.green} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors.grey} left="8%" top="40%" />
      <SVG icon="circle" width={12} fill={colors.yellow} left="80%" top="60%" />
      <SVG icon="box" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={colors.green} left="29%" top="26%" />
      <SVG icon="hexa" width={16} stroke={colors.grey} left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors.green} left="80%" top="70%" />
    </Divider>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}