import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import MorphReplace from 'react-svg-morph/lib/MorphReplace';
import * as Icons from 'mcs-lite-icon/lib/index';
import Heading from '../Heading';
import Card from '../Card';
import P from '../P';
import Spin from '../Spin';

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Icon = styled(Heading)`
  margin-bottom: 5px;
`;

const IconPath = styled(P)`
  background-color: ${props => props.theme.color.grayLight};
  padding: 2px 5px;
`;

const CodeBlock = styled(Heading)`
  background-color: ${props => props.theme.color.grayLight};
  padding: 2px 5px;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
  padding: 16px;
`;

class StatefulMorphReplace extends React.Component {
  state = { checked: false };
  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ checked: !prevState.checked }));
    }, 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <MorphReplace width={24} height={24}>
        {this.state.checked
          ? <Icons.IconMenu key="menu" />
          : <Icons.IconArrowLeft key="arrow" />}
      </MorphReplace>
    );
  }
}

storiesOf('Icon [mcs-lite-icon]')
  .addWithInfo('API', '', () => <Icons.IconDelete />, { inline: true })
  .addWithInfo(
    'Spin Icon',
    '',
    () =>
      <Spin>
        <Icons.IconLoading />
      </Spin>,
    { inline: true },
  )
  .addWithInfo(
    'MorphReplace',
    'https://github.com/gorangajic/react-svg-morph',
    () => <StatefulMorphReplace />,
    { inline: true, propTables: [MorphReplace] },
  )
  .addWithInfo(
    'Icon list, Custom color and size [Skip]',
    '',
    () =>
      <div>
        <Heading>MCS Lite Icon</Heading>
        <CodeBlock color="primary" level={3}>
          {'$ npm i mcs-lite-icon --save'}<br />
          {"import { IconName } from 'mcs-lite-icon';"}
        </CodeBlock>
        <CardWrapper>
          {Object.keys(Icons).map(name =>
            <StyledCard key={name}>
              <Icon color="grayBase" level={1}>
                {React.createElement(Icons[name])}
              </Icon>
              <P color="grayBase">{`<${name} />`}</P>
              <IconPath color="primary">mcs-lite-icon/lib/{name}</IconPath>
            </StyledCard>,
          )}
        </CardWrapper>
      </div>,
    { inline: false, propTables: false },
  );
