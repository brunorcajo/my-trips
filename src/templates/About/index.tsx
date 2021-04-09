import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from '../../components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Fechar" />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore magni
        odio nisi minus dolorem culpa, obcaecati quisquam accusantium deleniti
        nobis earum provident. Maiores, neque. Optio atque at recusandae
        nesciunt pariatur?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
