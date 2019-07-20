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
        <SVG icon="box" width={6} fill={colors.white} left="50%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="triangle" hiddenMobile width={12} stroke={colors.white} left="85%" top="50%" />
        <SVG icon="circle" width={8} fill={colors.white} left="55%" top="90%" />
        <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="70%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="3%" top="20%" />
      <SVG icon="circle" width={6} fill={colors.white} left="35%" top="80%" />
      <SVG icon="upDown" width={8} fill={colors.white} left="95%" top="85%" />
      <SVG icon="triangle" width={8} stroke={colors.white} left="28%" top="15%" />
      <SVG icon="box" hiddenMobile width={6} fill={colors.white} left="10%" top="10%" />
      <SVG icon="hexa" hiddenMobile width={16} stroke={colors.white} left="5%" top="60%" />
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
