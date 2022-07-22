import { Box, HStack, VStack,Text, Input, Button, Link } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box margin={0}  borderBottom='lightblue'>
         <VStack spacing={0}>
            <HStack justifyContent='center' backgroundColor='rgb(63,65,77)' color='white' width='100%' padding={50} spacing={50}>
                <VStack>
                        <HStack><svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16"><title>Envelope icon</title><path fill="#FFF" fill-rule="nonzero" d="M0 0v1.294C2.952 3.87 9.034 9.18 9.532 9.618c.62.545 1.233.604 1.468.604.235 0 .848-.058 1.468-.603.48-.422 6.357-5.604 9.532-8.405V0H0zm22 2.222c-3.261 2.912-8.504 7.593-8.956 7.995-.843.75-1.71.832-2.044.832-.334 0-1.201-.081-2.044-.833C8.488 9.8 3.099 5.037 0 2.298V16h22V2.222z"></path></svg>
                        <Text>Get special discount on your inbox</Text></HStack>
                        <HStack>
                            <Input variant='flushed' placeholder='Your Email'  _placeholder={{ color: 'inherit' }}/>
                            <Button  colorScheme='white' borderRadius={5} variant='outline'>SEND</Button>
                        </HStack>
                </VStack>
                <VStack>
                        <HStack><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20"><title>mobile icon</title><path fill="#FFF" fill-rule="nonzero" d="M1.364 0A1.37 1.37 0 0 0 0 1.364v17.272A1.37 1.37 0 0 0 1.364 20h9.09a1.37 1.37 0 0 0 1.364-1.364V1.364A1.37 1.37 0 0 0 10.455 0H1.364zM.909 3.182h10v13.182h-10V3.182zm3.636 14.545h2.728a.455.455 0 0 1 0 .91H4.545a.455.455 0 0 1 0-.91z"></path></svg>
                        <Text>EXPERIENCE THE NYKAA MOBILE APP</Text></HStack>
                        <HStack>
                            <Link href="https://nykaa.onelink.me/2573509543/aba6fc39" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="122" height="36" viewBox="0 0 135 40"><title>Google Play Store</title><path d="M130 40H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.8-2.2 5-5 5z"></path><path d="M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125m0-.8H5C2.2 0 0 2.3 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.7-2.2-5-5-5z" fill="#a6a6a6"></path><path d="M47.4 10.2c0 .8-.2 1.5-.7 2-.6.6-1.3.9-2.2.9s-1.6-.3-2.2-.9c-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2c.6-.6 1.3-.9 2.2-.9.4 0 .8.1 1.2.3.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.6-.7-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7 1 .7 1.6.7c.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2v-.8h2.9v.4zM52 7.7h-2.7v1.9h2.5v.7h-2.5v1.9H52v.8h-3.5V7H52v.7zm3.3 5.3h-.8V7.7h-1.7V7H57v.7h-1.7V13zm4.6 0V7h.8v6h-.8zm4.2 0h-.8V7.7h-1.7V7h4.1v.7H64l.1 5.3zm9.5-.8c-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2 1.3-.9 2.2-.9c.9 0 1.6.3 2.2.9s.9 1.3.9 2.2-.3 1.6-.9 2.2zm-3.8-.5c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7s-1.2.2-1.6.7c-.4.4-.7 1-.7 1.7s.2 1.3.7 1.7zm5.8 1.3V7h.9l2.9 4.7V7h.8v6h-.8l-3.1-4.9V13h-.7z" fill="#fff" stroke="#fff" stroke-width=".2" stroke-miterlimit="10"></path><path d="M68.1 21.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6 2.4 1 2.4 2.6c0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8H52c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8s2.1-4.8 4.7-4.8c1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6s3.1 6.6 6.7 6.6c2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zm45.4 1.4c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zM82.6 30h1.9V17.5h-1.9V30zm-3-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4V22h-1.8v.7zm-2.2 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6 2.3 1.1 2.3 2.6-1 2.6-2.3 2.6zm24.4-11.1h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2-3.9-4.1-3.9zm.1 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1-.1 1.1-.9 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.9-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.2-1.2 2-2.2 2zm10.5-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V17.5h-1.9V30z" fill="#fff"></path><linearGradient id="gpA" gradientUnits="userSpaceOnUse" x1="21.795" y1="-152.295" x2="5.012" y2="-135.513" gradientTransform="translate(0 161)"><stop offset="0" stop-color="#00a0ff"></stop><stop offset=".007" stop-color="#00a1ff"></stop><stop offset=".26" stop-color="#00beff"></stop><stop offset=".512" stop-color="#00d2ff"></stop><stop offset=".76" stop-color="#00dfff"></stop><stop offset="1" stop-color="#00e3ff"></stop></linearGradient><path d="M10.4 7.5c-.3.3-.4.8-.4 1.4V31c0 .6.2 1.1.5 1.4l.1.1L23 20.1v-.2L10.4 7.5z" fill="url(#gpA)"></path><linearGradient id="gpB" gradientUnits="userSpaceOnUse" x1="33.834" y1="-140.95" x2="9.637" y2="-140.95" gradientTransform="translate(0 161)"><stop offset="0" stop-color="#ffe000"></stop><stop offset=".409" stop-color="#ffbd00"></stop><stop offset=".775" stop-color="orange"></stop><stop offset="1" stop-color="#ff9c00"></stop></linearGradient><path d="M27 24.3l-4.1-4.1v-.3l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z" fill="url(#gpB)"></path><linearGradient id="gpC" gradientUnits="userSpaceOnUse" x1="24.816" y1="-138.715" x2="2.058" y2="-115.957" gradientTransform="translate(0 161)"><stop offset="0" stop-color="#ff3a44"></stop><stop offset="1" stop-color="#c31162"></stop></linearGradient><path d="M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4" fill="url(#gpC)"></path><linearGradient id="gpD" gradientUnits="userSpaceOnUse" x1="7.261" y1="-160.788" x2="17.424" y2="-150.625" gradientTransform="translate(0 161)"><stop offset="0" stop-color="#32a071"></stop><stop offset=".069" stop-color="#2da771"></stop><stop offset=".476" stop-color="#15cf74"></stop><stop offset=".801" stop-color="#06e775"></stop><stop offset="1" stop-color="#00f076"></stop></linearGradient><path d="M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z" fill="url(#gpD)"></path><path d="M27 24.1l-14.5 8.2c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0L27 24.1z" opacity=".2"></path><path d="M10.4 32.3c-.3-.3-.4-.8-.4-1.4v.1c0 .6.2 1.1.5 1.4v-.1h-.1zm21.6-11l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.4.9-1 1.3z" opacity=".12"></path><path d="M12.5 7.6L32 18.7c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4l-19.5-11c-1.4-.9-2.5-.3-2.5 1.3V9c0-1.5 1.1-2.2 2.5-1.4z" opacity=".25" fill="#fff"></path></svg></Link>
                            <Link href="https://nykaa.onelink.me/2573509543/aba6fc39" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="108" height="36" viewBox="0 0 119.7 40"><title>Apple App Store</title><path d="M110.1 0H7.5c-.7 0-1.3.1-2 .2-.6.1-1.3.3-1.9.6C3 1.1 2.5 1.5 2 2S1.1 3 .8 3.6C.5 4.2.3 4.9.2 5.5c-.1.7-.2 1.4-.2 2v24.9c0 .7.1 1.3.2 2s.3 1.3.6 1.9c.3.7.7 1.2 1.2 1.7s1 .9 1.6 1.2c.6.3 1.2.5 1.9.6.7.1 1.3.2 2 .2h104.6c.7 0 1.3-.1 2-.2s1.3-.3 1.9-.6c.6-.3 1.1-.7 1.6-1.2s.9-1 1.2-1.6c.3-.6.5-1.2.6-1.9.1-.7.2-1.3.2-2v-.9V9.5 8.4v-.9c0-.7-.1-1.3-.2-2s-.3-1.3-.6-1.9c-.6-1.2-1.6-2.2-2.8-2.8-.6-.3-1.2-.5-1.9-.6-.7-.1-1.3-.2-2-.2h-2z" fill="#a6a6a6"></path><path d="M8.4 39.1h-.9c-.6 0-1.3-.1-1.9-.2-.6-.1-1.1-.3-1.7-.5-.5-.3-1-.6-1.4-1-.4-.4-.8-.9-1-1.4-.3-.5-.4-1.1-.5-1.7-.1-.6-.2-1.2-.2-1.9v-24-.9c0-.6.1-1.3.2-1.9.1-.5.3-1.1.6-1.6s.6-1 1-1.4c.4-.4.9-.7 1.4-1 .5-.3 1.1-.4 1.7-.5C6.3 1 6.9.9 7.6.9H112.2c.6 0 1.2.1 1.9.2.6.1 1.1.3 1.7.5 1 .5 1.9 1.4 2.4 2.4.3.5.4 1.1.5 1.6.1.6.2 1.3.2 1.9v24.9c0 .6-.1 1.2-.2 1.9-.1.6-.3 1.1-.5 1.7-.3.5-.6 1-1 1.4-.4.4-.9.8-1.4 1-.5.3-1.1.5-1.7.5-.6.1-1.2.2-1.9.2H8.4z"></path><path d="M24.8 20.3c0-1.7.9-3.3 2.4-4.2-.9-1.3-2.4-2.1-4-2.2-1.7-.2-3.3 1-4.2 1-.9 0-2.2-1-3.6-1-1.9.1-3.6 1.1-4.5 2.7-1.9 3.3-.5 8.3 1.4 11 .9 1.3 2 2.8 3.4 2.8 1.4-.1 1.9-.9 3.6-.9 1.7 0 2.1.9 3.6.9s2.4-1.3 3.3-2.7c.7-.9 1.2-2 1.5-3.1-1.8-.6-2.9-2.4-2.9-4.3zM22 12.2c.8-1 1.2-2.2 1.1-3.5-1.2.1-2.4.7-3.2 1.7-.8.9-1.2 2.1-1.1 3.4 1.3 0 2.4-.6 3.2-1.6zM42.3 27.1h-4.7l-1.1 3.4h-2L39 18.1h2l4.5 12.4h-2l-1.2-3.4zm-4.2-1.5h3.8L40 20.1h-.1l-1.8 5.5zm17.1.4c0 2.8-1.5 4.6-3.8 4.6-1.2.1-2.3-.6-2.8-1.6v4.5h-1.9v-12h1.8V23c.6-1 1.7-1.6 2.9-1.6 2.2-.1 3.8 1.8 3.8 4.6zm-2 0c0-1.8-.9-3-2.4-3-1.4 0-2.4 1.2-2.4 3s1 3 2.4 3c1.5 0 2.4-1.2 2.4-3zm11.9 0c0 2.8-1.5 4.6-3.8 4.6-1.2.1-2.3-.6-2.8-1.6v4.5h-1.9v-12h1.8V23c.6-1 1.7-1.6 2.9-1.6 2.3-.1 3.8 1.8 3.8 4.6zm-1.9 0c0-1.8-.9-3-2.4-3-1.4 0-2.4 1.2-2.4 3s1 3 2.4 3c1.5 0 2.4-1.2 2.4-3zm8.5 1c.1 1.2 1.3 2 3 2 1.6 0 2.7-.8 2.7-1.9 0-1-.7-1.5-2.3-1.9l-1.6-.4c-2.3-.5-3.3-1.6-3.3-3.3 0-2.1 1.9-3.6 4.5-3.6s4.4 1.5 4.5 3.6h-1.9c-.1-1.2-1.1-2-2.6-2s-2.5.8-2.5 1.9c0 .9.7 1.4 2.3 1.8l1.4.3c2.5.6 3.6 1.6 3.6 3.4 0 2.3-1.8 3.8-4.8 3.8-2.8 0-4.6-1.4-4.7-3.7h1.7zm11.6-7.7v2.1H85v1.5h-1.7v5c0 .8.3 1.1 1.1 1.1h.6v1.5c-.3.1-.7.1-1 .1-1.8 0-2.5-.7-2.5-2.4V23h-1.3v-1.5h1.3v-2.1h1.8zm2.8 6.7c0-2.8 1.7-4.6 4.3-4.6 2.6 0 4.3 1.8 4.3 4.6 0 2.9-1.7 4.6-4.3 4.6-2.7 0-4.3-1.8-4.3-4.6zm6.7 0c0-2-.9-3.1-2.4-3.1S88 24 88 26s.9 3.1 2.4 3.1 2.4-1.2 2.4-3.1zm3.4-4.6H98V23c.2-1 1.2-1.7 2.2-1.6.2 0 .4 0 .6.1v1.7c-.3-.1-.6-.1-.8-.1-1 0-1.9.8-1.9 1.8v5.7h-1.9v-9.2zm13.2 6.4c-.2 1.6-1.8 2.8-3.9 2.8-2.6 0-4.3-1.8-4.3-4.6s1.6-4.7 4.2-4.7c2.5 0 4.1 1.7 4.1 4.5v.6h-6.4v.1c-.1 1.3.8 2.4 2.1 2.6h.3c.9.1 1.8-.4 2.1-1.3h1.8zm-6.3-2.7h4.5c.1-1.2-.9-2.2-2.1-2.3h-.2c-1.2 0-2.2 1-2.2 2.3z" fill="#fff"></path><g><path d="M37.8 8.7c1.5-.1 2.7 1 2.8 2.4v.5c0 1.9-1 3-2.8 3h-2.2v-6l2.2.1zm-1.2 5.2h1.1c1 .1 1.9-.7 2-1.8v-.4c.1-1-.6-2-1.6-2.1h-1.5v4.3zm5.1-1.5c-.1-1.2.8-2.2 1.9-2.3 1.2-.1 2.2.8 2.3 1.9v.4c.1 1.2-.7 2.2-1.9 2.3-1.2.1-2.2-.7-2.3-1.9v-.4zm3.3 0c0-1-.4-1.5-1.2-1.5-.8 0-1.2.6-1.2 1.5 0 1 .4 1.6 1.2 1.6.8 0 1.2-.6 1.2-1.6zm6.6 2.3h-.9l-.9-3.3h-.1l-.9 3.3h-.9l-1.2-4.5h.9l.8 3.4h.1l.9-3.4h.9l.9 3.4h.1l.8-3.4h.9l-1.4 4.5zm2.3-4.5h.9v.7h.1c.2-.5.8-.8 1.3-.8.8-.1 1.5.5 1.6 1.4V14.7h-.9V12c0-.7-.3-1.1-1-1.1-.6 0-1.1.4-1.1 1V14.7h-.9v-4.5zm5.2-1.8h.9v6.3h-.9V8.4zm2.1 4c-.1-1.2.7-2.2 1.9-2.3 1.2-.1 2.2.7 2.3 1.9v.4c.1 1.2-.7 2.2-1.9 2.3-1.2.1-2.2-.7-2.3-1.9v-.4zm3.4 0c0-1-.4-1.5-1.2-1.5-.8 0-1.2.6-1.2 1.5 0 1 .4 1.6 1.2 1.6.7 0 1.2-.6 1.2-1.6zm1.8 1c0-.8.6-1.3 1.7-1.3l1.2-.1v-.4c0-.5-.3-.7-.9-.7-.5 0-.8.2-.9.5h-.9c.1-.8.8-1.3 1.8-1.3 1.1 0 1.8.6 1.8 1.5v3.1h-.9v-.6h-.1c-.3.5-.8.7-1.4.7-.7.1-1.4-.5-1.5-1.2.1-.1.1-.1.1-.2zm2.9-.4v-.4l-1.1.1c-.6 0-.9.3-.9.6 0 .4.4.6.8.6.6.2 1.1-.2 1.2-.9 0 .1 0 .1 0 0zm2-.6c0-1.4.7-2.3 1.9-2.3.6 0 1.1.3 1.4.8h.1V8.4h.9v6.3h-.9V14h-.1c-.3.5-.8.8-1.4.8-1.1 0-1.9-.9-1.9-2.4zm1 0c0 1 .4 1.5 1.2 1.5.8 0 1.2-.6 1.2-1.5s-.5-1.5-1.2-1.5c-.8 0-1.2.6-1.2 1.5zm6.9 0c-.1-1.2.7-2.2 1.9-2.3 1.2-.1 2.2.7 2.3 1.9v.4c.1 1.2-.7 2.2-1.9 2.3-1.2.1-2.2-.7-2.3-1.9v-.4zm3.4 0c0-1-.4-1.5-1.2-1.5-.8 0-1.2.6-1.2 1.5 0 1 .4 1.6 1.2 1.6.7 0 1.2-.6 1.2-1.6zm2.1-2.2h.9v.7h.1c.2-.5.8-.8 1.3-.8.8-.1 1.5.5 1.6 1.4V14.7h-.9V12c0-.7-.3-1.1-1-1.1-.6 0-1.1.4-1.1 1V14.7h-.9v-4.5zm8.8-1.1v1.1h1v.8h-1v2.3c0 .5.2.7.6.7h.3v.7h-.5c-1 0-1.4-.3-1.4-1.2V11h-.7v-.7h.7V9.1h1zm2.2-.7h.9v2.5h.1c.2-.5.8-.9 1.4-.8.8 0 1.5.6 1.6 1.4V14.7h-.9V12c0-.7-.3-1.1-1-1.1-.6 0-1.1.4-1.1 1V14.7h-.9V8.4zm9.1 5.1c-.2.8-1.1 1.4-1.9 1.3-1.1 0-2.1-.9-2.1-2v-.3c-.2-1.1.6-2.2 1.8-2.3h.3c1.3 0 2 .9 2 2.3v.3h-3.2v.1c-.1.7.4 1.2 1.1 1.3h.1c.4.1.9-.2 1.1-.5h.8zm-3.2-1.5h2.3c0-.6-.4-1.1-1-1.2h-.1c-.6.1-1.2.6-1.2 1.2z" fill="#fff"></path></g></svg></Link>
                        </HStack>
                </VStack><VStack>
                        <HStack><svg class="phone-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30"><path fill="#FFF" d="M24.02 30h-.03c-5.01-.164-10.88-5.02-14.925-9.068C5.015 16.885.16 11.013.003 6.026c-.058-1.75 4.237-4.862 4.28-4.893 1.115-.776 2.352-.5 2.86.203.344.476 3.6 5.409 3.953 5.969.368.58.313 1.445-.145 2.312-.253.482-1.092 1.956-1.485 2.643.425.605 1.547 2.086 3.865 4.404 2.32 2.318 3.8 3.443 4.406 3.867.687-.393 2.161-1.232 2.643-1.484.854-.453 1.714-.51 2.3-.151.599.367 5.518 3.638 5.971 3.953.38.268.625.727.675 1.26.046.54-.12 1.11-.467 1.607-.028.042-3.104 4.284-4.838 4.284z"></path></svg>
                        
                        <Text>FOR ANY HELP YOU MAY CALL US AT<br/> 1800-267-4444 <br/>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</Text></HStack>                           
                </VStack>
            </HStack>
            <HStack justifyContent='center' alignItems='baseline'  backgroundColor='rgb(140,141,148)' color='white' width='100%' padding={50} spacing={50} >

                <VStack align='left'>
                    <Link><svg width='100px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 250"><path xmlns="http://www.w3.org/2000/svg" d="M157.9 57.2c5-9.6-11.2-6.9-11.2-6.9-5.8 0-8.4 7-9.6 9l-17.5 34.5c-3.3 5.7-14.2 30.1-17.8 35.5-.3-5.5.1-16.5.2-19.1.7-10.4 1.4-18.3 2.5-27.8.8-7.4 2.4-15.7.9-23.1-1-4.6-2.5-4.9-9.1-5.6-6.9-.7-11.6 9.3-13.9 14-8.4 17.4-17.8 34.4-25.3 52.2-2.2 5.2-4.9 10.4-7.2 15.5-2.7 6.2-5.2 12.3-8.1 18.4-3.1 6.4-12.8 27.4-15.5 34-3 7.2-3.6 13 8.4 12.7 1.9 0 6.1.4 11.3-5.2 4.1-4.4 4.9-8.5 7.3-14.6 8.6-21.6 14.7-35.9 24.1-57.3.9-2.1 3-8.2 5.1-12.9-.1 6.7-1.2 14.7-1.7 20-1.6 19.4-2.7 38.1-4.4 57.3-.2 2.6-.9 5.7.3 8.1 1.2 2.4 4.2 3 6.6 3.3 9.6 1.2 10.6-3.6 13.6-10.2 2.7-5.9 4.3-10.7 6.7-16.7 7.4-18.5 15.2-36.8 23.8-54.8 2.2-4.6 4.4-9.1 6.8-13.6 4.4-8.3 8-16.1 12.8-25.3 3.6-6.6 7.1-14.1 10.9-21.4zm329.5 52.1c-1.1-11.1-16.3-5.5-25.4-3.8-3.4.6-13.9 2.6-26 4.9-.5-12.5-.3-10-.4-17.6-.3-11-.9-19.6-1.5-29.3-.4-6.1-1.3-14.6-12.3-13-12.8 1.8-14.9 8.2-18.3 15.9-8.9 20.1-8.6 20.2-18.7 42.6-.8 1.7-4.5 10.7-5.1 12.5-.4.1-1.2.3-2.2.6-4.1.9-9.1 2-14.6 3.2l.1-.5c1.3-10.2 2.9-20.4 4.3-30.6 1.3-9.3 2.7-24.5 3.8-33.8 1.2-10-10.4-9.8-10.4-9.8-7.1-.4-9.8 1.7-14.3 7.5-7.7 10-17 20.8-25.2 31.8-14.9 19.9-25.8 34.9-39.3 54.9-3.9 5.8-9.9 14.6-15.1 21.5-3.5-6.9-6.5-14.5-9.4-21.5-4.2-10-7.3-16.2-9.3-22.8-1.8-5.8.4-6.6 4.7-9.9 12.4-9.4 26.4-15.9 39.1-24.9 9-6.4 19.8-13.5 28.6-20.1 0 0 5.1-3 7.9-6.8 3.5-4.8-6.4-9.8-6.4-9.8-5.6-.9-8.7.4-12.6 2.2-4 1.8-9.2 5.9-12.6 8.6-7.5 5.8-17 12.7-24.4 18.5-9.1 7.1-15.3 11.5-25.3 17.4l25.4-38c8.3-10.7-13.7-13.7-22.1-2.4-7.8 10.1-13.1 19-19.2 28.2-14.7 21.9-26.8 44.9-38.9 69-4.6 9.2-9.1 18.8-13.3 28.3-2 4.6-7.9 15.2.2 16.3 17.3 2.2 20.1-6 24-15.9 6.4-16.3 8.5-19.3 12.6-29.4 4-9.8 6.9-15.4 11.4-23.8.1-.1 1.4-2.2 1.4-2.2.8 1.7 6.1 19.3 6.8 21.3 3.6 9.5 9.9 31.7 13.5 41.8 2.6 8.4 3.3 10.8 14.6 10.5 5.6-.1 8-2.3 11.7-9.3s19.7-36.8 19.7-36.8c4.8-.8 11.7-2 16.2-2.8.8-.1 2.6-.5 5.1-1 1.7-.2 3.1-.5 4.2-.8.1 0 .1 0 .2-.1 4.4-.9 10-2 16.1-3.2-1.1 5.5-4.5 17.6-5.2 20.7 0 0-7.4 28.8 2.2 30.3 6 .9 9.1-.1 9.1-.1 11.2-1.3 11.4-16.4 11.4-16.4l6.1-39.1c4.4-.9 8.8-1.8 13.1-2.6l-13.2 44.6c-1.9 6.3-3.3 14.4 8 14.4 9.2.5 9.8-5.3 9.8-5.3.2-.9 7.5-24.4 9.3-32.8 1.2-5.4 5.5-19.3 7.2-24.9 4.8-.9 8.4-1.6 10.1-1.9 2-.3 5.9-1 11-1.8-.1 5.2 0 12.4.1 13.4 1.1 15.8-.1 32.2 3.2 47.7.5 2.5 1.5 5.7 4.7 5.7 3.8 0 5-.4 9-.7 11.6-1 9.5-12.7 8.8-20.1-.8-8.2-1.6-15.1-2.7-23.3-.9-6.7-1.5-15.5-1.6-26.1v-.2c19-3.2 39.5-6.7 42.5-7.2 4.8-1.3 8.8-.9 7.8-11.9zm-148.5 21c0 .1-.1.1-.1.2-13.3 2.9-25.8 5.7-32.8 7.3 7-11.7 37.8-54.3 42.5-59.3-2.6 13.2-6.8 37.7-9.6 51.8zm76.8-16.8v.7c-6.4 1.2-12.4 2.4-17.2 3.3 6.1-15.8 12.5-35.2 16.3-45-.3 7.3 1.2 33.8.9 41zM229.2 66.4c2-3.7 6.5-11 .9-13.8-3.3-1.6-7.7-2.6-11.1-.9-2.8 1.5-4.9 4.4-6.3 7.1l-21.4 33.7c-3.5 4.8-6.8 10.8-13.9 11.6-4.7.5-8.1-1.5-8-5.7.1-4.3 2.6-10 4.5-13.7 5.6-10.6 6.3-14.2 11.7-24.7 5.2-10.1-11.8-12.4-16-5.1-3 5.2-8.8 15-10.1 18.3-2.4 6-20.4 34.6-12.6 45.9 10 12.8 36.6-7.4 23 15.9-11 18.7-17.9 29.4-27.5 46.7-2.1 3.7-4.7 7.4-5.4 11.8-1 6.2 7.5 6.1 11.2 5.9 6.5-.5 9.6-3.5 12.2-9.4 1.4-3.1 3.3-6.9 4.7-10 12.6-27.5 26-51.4 42.6-78 7.9-12.6 14.9-23.4 21.5-35.6z" fill="white"></path></svg> 
                   </Link>
                <Link>Who are we?</Link>
                <Link>Careers</Link>
                <Link>Authenticity</Link>
                <Link>Press</Link>
                <Link>Testimonials</Link>
                <Link>Nykaa CSR</Link>
                <Link>Responsible Disclosure</Link>
                <Link>Investor Relations</Link>
                </VStack>
      
                <VStack align='left'>
                    <Link>Help</Link>
                    <Link>Contact Us</Link>
                    <Link>Frequently asked questions</Link>
                    <Link>Store Locator</Link>
                    <Link>Cancellation & Return</Link>
                    <Link>Shipping & Delivery</Link>
                    <Link>Sell on Nykaa</Link>
                </VStack>
        
                <VStack align='left'>
                     <Link>Inspire Me</Link>
                     <Link> Beauty Book</Link>
                     <Link> Nykaa TV</Link>
                     <Link> Nykaa Network</Link>
                     <Link> Buying Guides</Link>
                </VStack>
                <VStack align='left'>
                    <Link>Quick Links</Link>    
                    <Link>Offer Zone</Link>    
                    <Link>New Launches</Link>    
                    <Link>Nykaa Man</Link>    
                    <Link>Nykaa Fashion</Link>    
                    <Link>Nykaa Pro</Link>    
                   <Link>Nykaa femina beauty<br/> awards winners 2019</Link>    
                   <Link>Sitemap</Link>
                </VStack>
                <VStack align='left'>
                <Link>Top Categories</Link>
                <Link>Makeup</Link>
                <Link>Skin</Link>
                <Link>Hair</Link>
                <Link>Personal Care</Link>
                <Link>Appliances</Link>
                <Link>Mom and Baby</Link>
                <Link>Wellness</Link>
                <Link>Fragrance</Link>
                <Link>Natura</Link>
                <Link>Luxe</Link>
                </VStack>
            </HStack>
            <HStack justifyContent='center'  backgroundColor={'rgb(243,243,243)'} width='100%' padding={50}  spacing={50}>
                    <HStack>
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg" alt="Free Shipping"/>
                      <Text>FREE SHIPPING<br/><hr/>
                       On Orders Above ₹299</Text>
                    </HStack>
                    <HStack>
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg" alt="Free Shipping"/>
                      <Text>EASY RETURNS<br/><hr/>
                        15-Day Return Policy</Text>
                    </HStack>
                    <HStack>
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg" alt="Free Shipping"/>
                      <Text>100% <br/>AUTHENTIC<br/><hr/>
                        Products Sourced Directly</Text>
                    </HStack>
                    <HStack>
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg" alt="Free Shipping"/>
                      <Text>2400+ BRANDS<br/><hr/>
                        1.9 Lakh+ Products</Text>
                    </HStack>
                    <VStack>
                        <Text>Show us some love ❤ on social media</Text>
                        <HStack  >
                            <li Type='none' ><a href="https://www.instagram.com/mynykaa/?ref=badge" target="_blank" rel="noopener noreferrer"><img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-instagram-filled.svg" alt="Instagram"/></a></li>
                            <li Type='none' ><a href="https://www.facebook.com/MyNykaa" target="_blank" rel="noopener noreferrer" ><img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-facebook-filled.svg" alt="Facebook"/></a></li>
                            <li Type='none' ><a href="https://www.youtube.com/channel/UCoaH2UtB1PsV7av17woV1BA" target="_blank" rel="noopener noreferrer" ><img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-youtube-filled.svg" alt="Youtube"/></a></li>
                            <li Type='none' ><a href="https://twitter.com/MyNykaa" target="_blank" rel="noopener noreferrer" ><img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-twitter-filled.svg" alt="Twitter"/></a></li>
                            <li  Type='none'><a href="https://www.pinterest.com/mynykaa/" target="_blank" rel="noopener noreferrer" ><img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-pinterest-filled.svg" alt="Pinterest"/></a></li>
                        </HStack>
                    </VStack>

            </HStack>
            <HStack justifyContent='center'  backgroundColor={'rgb(252,39,121)'} width='100%' padding={50}  spacing={50}>
                <VStack color='white'>
                <HStack spacing={10}> 
                     <Link>Terms & Conditions</Link>
                     <Link>Shipping Policy</Link>
                     <Link>Cancellation Policy</Link>
                     <Link>Privacy Policy</Link>
                </HStack>
              
                    <Link>© 2022 Nykaa E-Retail Pvt. Ltd. All Rights Reserved.</Link>
               
                </VStack>
            
            </HStack>
        </VStack>
    </Box>
  )
}

export default Footer