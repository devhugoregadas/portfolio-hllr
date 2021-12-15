import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const PcSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="10%"
    top="10%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const PcContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="gbl-pc"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 600]}
    h={[280, 480, 660]}
    position="relative"
  >
    {children}
  </Box>
))

const VoxelPc = () => {
  return (
    <PcContainer>
      <PcSpinner />
    </PcContainer>
  )
}

export default Loader
