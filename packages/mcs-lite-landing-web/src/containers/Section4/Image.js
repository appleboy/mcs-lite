import React from 'react';
import Transition from 'react-motion-ui-pack';
import { pure } from 'recompose';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import LazyloadOnce from 'mcs-lite-ui/lib/LazyloadOnce';
import imgOpenBackground from '../../statics/images/img_open_source.svg';
import SVGCard from '../../components/SVG/SVGCard';
import SVGCode from '../../components/SVG/SVGCode';
import SVGSearch from '../../components/SVG/SVGSearch';
import SVGTooltip from '../../components/SVG/SVGTooltip';
import imgCustomizationBackground from '../../statics/images/img_customization.svg';
import SVGCloud from '../../components/SVG/SVGCloud';
import SVGOpenCode1 from '../../components/SVG/SVGOpenCode1';
import SVGOpenCode2 from '../../components/SVG/SVGOpenCode2';
import SVGOpenCode3 from '../../components/SVG/SVGOpenCode3';
import ImageLayerWrapper from '../../components/ImageLayerWrapper';
import BackgroundImage from '../../components/BackgroundImage';
import { ScrollParallaxCode } from './styled-components';

const HEIGHT = 170;

export const ImageOpenSouce = pure(() =>
  <LazyloadOnce height={HEIGHT}>
    <Transition component={false} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
      <ImageLayerWrapper key="ImageLayerWrapper" height={HEIGHT}>
        <BackgroundImage src={imgOpenBackground} />
        <div>
          <ScrollParallaxCode
            animation={{
              x: -40,
              y: 35,
              rotate: -15,
              playScale: [0, 0.5],
            }}
            style={{ transform: 'translate(-30px, 30px) rotate(0deg)' }}
            component={SVGOpenCode1}
          />
        </div>
        <div>
          <ScrollParallaxCode
            animation={{ x: 40, y: 35, rotate: 15, playScale: [0, 0.5] }}
            style={{ transform: 'translate(30px, 30px) rotate(0deg)' }}
            component={SVGOpenCode3}
          />
        </div>
        <div>
          <ScrollParallaxCode
            animation={{ y: 20, playScale: [0, 0.5] }}
            style={{ transform: 'translateY(25px)' }}
            component={SVGOpenCode2}
          />
        </div>
        <div>
          <ScrollParallax
            animation={{ y: 20, playScale: [0, 0.5] }}
            style={{ transform: 'translateY(0px)' }}
            component={SVGCloud}
          />
        </div>
      </ImageLayerWrapper>
    </Transition>
  </LazyloadOnce>,
);

export const ImageCustom = pure(() =>
  <LazyloadOnce height={HEIGHT}>
    <Transition component={false} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
      <ImageLayerWrapper key="ImageLayerWrapper" height={HEIGHT}>
        <BackgroundImage src={imgCustomizationBackground} />
        <div>
          <ScrollParallax
            animation={{
              x: -105,
              y: 85,
              playScale: [0, 0.5],
            }}
            style={{ transform: 'translate(-120px, 85px)' }}
            component={SVGTooltip}
          />
        </div>
        <div>
          <ScrollParallax
            animation={{ y: 35, playScale: [0, 0.5] }}
            style={{ transform: 'translateY(0px)' }}
            component={SVGCode}
          />
        </div>
        <div>
          <ScrollParallax
            animation={{ x: 80, y: 22, playScale: [0, 0.5] }}
            style={{ transform: 'translate(95px, 5px)' }}
            component={SVGCard}
          />
        </div>
        <div>
          <ScrollParallax
            animation={{ x: 70, y: 125, playScale: [0, 0.5] }}
            style={{ transform: 'translate(70px, 130px)' }}
            component={SVGSearch}
          />
        </div>
      </ImageLayerWrapper>
    </Transition>
  </LazyloadOnce>,
);
