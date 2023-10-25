import { RecycleFull } from '@react95/icons';
import { styled } from '@xstyled/styled-components';

const DesktopIcon = styled.div({
    marginTop: '20px',
    marginLeft: '19px',
    height: '70px',
    width: '70px'
  })

  const DesktopIconText = styled.p({
    marginTop: '4px',
    textAlign: 'center'
  })

  const DesktopIconImage = styled(RecycleFull)`
    display: block;
    margin: auto;
`;

export default function DesktopIcons() {    
    return  (
        <div>
            <DesktopIcon className='pointer'>
                <DesktopIconImage className='pointer' variant="32x32_4" />
                <DesktopIconText className='pointer' >Lixeira</DesktopIconText>
            </DesktopIcon>
        </div>        
    );
}

