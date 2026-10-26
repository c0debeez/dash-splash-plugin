import React, {useState} from 'react';
import {createCache, StyleProvider} from '@ant-design/cssinjs';
import LoadingOutlined from '@ant-design/icons/es/icons/LoadingOutlined';
import ConfigProvider from 'antd/es/config-provider';
import Progress from 'antd/es/progress';
import Skeleton from 'antd/es/skeleton';
import Spin from 'antd/es/spin';

type LoaderProps = {
  color?: string;
  size?: number;
  thickness?: number;
  styleContainer?: ShadowRoot;
  styleCache?: ReturnType<typeof createCache>;
};

function Frame({color = '#1677ff', styleContainer, styleCache, children}: LoaderProps & {children: React.ReactNode}) {
  // Each shadow root owns its cache; sharing one can suppress sibling styles.
  const [cache] = useState(createCache);
  const tokenColor = color === 'currentColor' ? '#1677ff' : color;
  return <StyleProvider cache={styleCache ?? cache} container={styleContainer} mock={styleCache ? 'server' : undefined}>
    <ConfigProvider theme={{token: {colorPrimary: tokenColor, colorText: tokenColor}, components: {
      Skeleton: {
        gradientFromColor: `color-mix(in srgb, ${color} 12%, transparent)`,
        gradientToColor: `color-mix(in srgb, ${color} 28%, transparent)`,
      },
    }}}>
      {children}
    </ConfigProvider>
  </StyleProvider>;
}

export function SpinLoader(props: LoaderProps) {
  return <Frame {...props}><Spin styles={{root: {color: 'inherit'}}}/></Frame>;
}

export function LoadingLoader(props: LoaderProps) {
  return <Frame {...props}><Spin styles={{root: {color: 'inherit'}}}
    indicator={<LoadingOutlined spin style={{fontSize: 24}}/>}/></Frame>;
}

export function ProgressLoader(props: LoaderProps) {
  return <Frame {...props}>
    <Progress percent={70} status="active" showInfo={false} size={[160, props.thickness ?? 8]}
      strokeColor={props.color ?? 'currentColor'} style={{color: 'inherit'}}
      styles={{rail: {height: 'var(--dash-splash-stroke, 8px)'}, track: {height: 'var(--dash-splash-stroke, 8px)'}}}
      railColor={`color-mix(in srgb, ${props.color ?? '#1677ff'} 12%, transparent)`}/>
  </Frame>;
}

export function SkeletonLoader(props: LoaderProps) {
  return <Frame {...props}>
    <Skeleton active title={{width: '45%'}} paragraph={{rows: 2, width: ['100%', '75%']}}
      style={{width: 160, color: 'inherit'}}/>
  </Frame>;
}
