import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { UpDown, UpDownWide } from '../styles/animations'
import SVG from '../components/SVG'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const Hero = ({ children, offset }) => (
  <>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <SVG icon="triangle" hiddenMobile width={48} stroke={colors.orange} left="10%" top="20%" />
        <SVG icon="hexa" width={48} stroke={colors.pink} left="60%" top="70%" />
        <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} fill={colors['blue-dark']} left="77%" top="10%" />
        <SVG icon="triangle" width={12} stroke={colors.white} left="85%" top="50%" />
        <SVG icon="circle" width={16} fill={colors['grey-darker']} left="55%" top="90%" />
        <SVG icon="triangle" width={16} stroke={colors['grey-darkest']} left="26.5%" top="65%" />
        <SVG icon="cross" width={16} stroke={colors.pink} left="32.4%" top="15%" />
        <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="70%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={24} fill={colors['grey-darker']} left="2%" top="65%" />
      <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="3%" top="20%" />
      <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="50%" top="75%" />
      <SVG icon="upDown" width={8} fill={colors['grey-darkest']} left="95%" top="85%" />
      <SVG icon="upDown" hiddenMobile width={24} fill={colors['grey-darker']} left="40%" top="80%" />
      <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="28%" top="15%" />
      <SVG icon="circle" width={64} fill={colors['blue-dark']} left="95%" top="5%" />
      <SVG icon="box" hiddenMobile width={64} fill={colors.green} left="9%" top="90%" />
      <SVG icon="box" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={colors['grey-darkest']} left="50%" top="35%" />
      <SVG icon="hexa" width={16} stroke={colors['grey-darker']} left="15%" top="50%" />
      <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
