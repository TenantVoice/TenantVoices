// NewPostCard.js
import { Link } from "react-router-dom";
import { Box, Flex, Avatar, Text, IconButton, Image, Grid, Heading, Button, CardFooter, Card } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiShare, BiChat, BiLike } from 'react-icons/bi';
import { useState } from 'react';
import LikesButton from "./LikesButton";
import { getUser } from "../adapters/user-adapter";

const avatarColors = ["blue.200", "green.200", "orange.200", "cyan.200", "teal.200"];

function getAvatarColor(username) {
    const index = Math.abs(username?.charCodeAt(0) + username.length) % avatarColors.length;
    return avatarColors[index];
};


const GlowingChip = ({ children }) => {
    return (
        <span className="relative z-10 mb-4 pl- 4 bg-electric inline-block rounded-full border border-zinc-700 bg-zinc-900/20 px-3 py-1.5 text-xs text-orange-300 md:mb-0">
            {children}
            <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0" />
        </span>
    );
};


const NewPostCard = ({ post }) => {
    const [likes, setLikes] = useState(0);

    const handleClick = () => {
        setLikes((currentLikes) => currentLikes + 1);
    };

    // const datetimeString = post.created_at;
    // const pattern = /^[^T]+/;
    // const match = datetimeString.match(pattern);
    // let date = '';
    // if (match) {
    //     date = match[0];
    //     console.log(date);  // Output: 2024-05-15
    // }

    return (
        <Card bg="#001D4A" maxW="70rem">
            <Box borderWidth='1px' borderRadius='lg' overflow='hidden' color={"white"} borderColor="#4C6085">
                <Grid templateColumns="repeat(1, 1fr)" gap={6} justifyContent="center" width="100%" p="4" >
                    <Flex padding='4' align='center' justify='space-between'>
                        <Flex flex='1' gap='4' alignItems='center'>
                            <Link to={`/users/${post.user_id}`}>
                                <Avatar
                                    name={post.username}
                                    src={post.photo_url || 'defaultAvatarUrl'}
                                />
                            </Link>
                            <Box>
                                <Link to={`/users/${post.user_id}`}>
                                    <Heading size='md' color="#FFFFFF">{post.username}</Heading>
                                </Link>
                                <Text fontSize='sm' color="#fc3a3a" fontStyle="light"> is facing a {post.category} problem</Text>
                            </Box>
                            <Box>
                                <GlowingChip size='sm' paddingLeft="3.75rem" color="#FF8811">Ongoing</GlowingChip>
                                {/* <Heading size='sm' paddingLeft="3.75rem" color="#FF8811">Status: Ongoing</Heading> */}
                                {/* // vv when we can show the location, then uncomment this vv */}
                                {/* <Text fontSize='sm' color="#A8DADC" fontStyle="italic" paddingLeft="3.75rem">New York, NY</Text> */}
                            </Box>
                        </Flex>

                        <IconButton
                            variant='ghost'
                            colorScheme='#fffff'
                            aria-label='See menu'
                            icon={<BsThreeDotsVertical />}
                        />

                    </Flex>
                    <Link to={`/posts/${post.id}`} key={post.id}>
                        <Image
                            borderWidth='1px'
                            borderRadius='md'
                            src={post.picture || '../weAreOne.jpg'}
                            alt='Post image'
                            fit='cover'
                            maxHeight='500px'
                            maxWidth='500px'

                        />
                        <Box p='2'>
                            <Text color="#ffffff">{post.description}</Text>
                        </Box>

                    </Link>
                    {/* <Box px='2' pt="2">
                        <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }} />
                    </Box>
                    <CardFooter
                        justify='space-between'
                        flexWrap='wrap'

                        sx={{
                            '& > button': {
                                minW: '136px',
                            },
                        }}
                    >
                        <Button onClick={handleClick} color="#f7f7f7" variant='ghost' leftIcon={<BiLike />}>
                            Like {likes}
                        </Button>
                        <Link to={`/posts/${post.id}`} key={post.id}>
                            <Button color="#f7f7f7" variant='ghost' leftIcon={<BiChat />}>
                                Comment
                            </Button>
                        </Link>
                    </CardFooter> */}
                </Grid>
            </Box>
        </Card>
    );
};



export default NewPostCard;
