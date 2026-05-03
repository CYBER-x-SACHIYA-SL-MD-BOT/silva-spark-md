const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // Session & Auth
    SESSION_ID: process.env.SESSION_ID || "Silva~H4sIAAAAAAAAA5VWa0/bSBT9L/O1V2XuvCcS0qZpQngFSqAgKj5M4kkwJHawndBQ8d+rOwbalXa7LJIjM76ZOfecc4/zgxVlXsfDuGWdH2xV5ZvQRLpttqvIOuzTejaLFQOWhSawzjcUHISWIIQFDoga0IAQDlAiCNSgBAi6BAIKk+pQG6CvgAQUFoTmgPRd395KDSgVoNeA3oFBQOQglANEByjw5hnYaj1Z5NM/ABPcAFoDgnOQFgTSNiBQAUoBqBSd7h2IhFeAkAhaASoOqHnCjEImNJ6D4SCkAnroLS1YBcoDWgtGg3bg/c0zwQp5lRfz/uo2LmMVFodxexry6n1cKp5okXSWBLQI1gByny76dCCUBVQSjATBqUaD9ICOnkoginwL3VKdByTgqXUDSO2hAecSdK7B6XdRicYkHpwA1BqMAQeCKxCiZUA4EFokedGB9oQOLR1MPKqkpkAQEqiiBYlOt10am/yDrURKAnKbqKzzeRGz/SwWTd5s323IpCd16xTYF8446HbR0Up7OQShQGLyV6Ic7IugCJ7KHXjyA0hFnQshqRodOTX1at37jKipU6LH0zAgkWMUHYE8AdBJXN/qRMaXnBZU610kEEKC92kHgi5UqtVtk6SMtqmGWjT4G3un1esk3/8fIyLNr9YgaUufHOYTL062SktFqKnEJ1IFkWokkOhpRqhlgkziKkCHgICEEls3G9oETBrpd7GoeUIjORjaRSREpGHrHZpw0skDElqNiSGh04HGA2KyIBJqL1qqOYmBaSwUTYhMhrQuaWz5G42hWVd/dJzWKU9IKeGShVGnvolG0Q4NjSjh8JiWhDSgdFJUS/AIrp0EAkHQTJpPRQq75B6KWUG+oLZdIluptESRmfyp2qknrrkGQQ4FOp2m178Q5VOOakWaapVihKxGdJrkK1LPeiAClW4zRklS6D5u9zPWwWdgVZzndVOFJi8LWvMKWMg24zitYpP8xuqDw0E5PMXpSTW9Hz/OwuhEhsujMZ71+edY79wuulu+Xe9cP13sMmCrqpzGuo7ZMK+bstoex7oO81izzrcbYEX83rROptMkApvlVd1cFOvVogzZq81fH4bptFwXzXhbTHt0EyvW4b+WY9PkxbwmQddFqKa3+Sb2bkNTs84sLOr41mCsYsY6TbWOb7neKzNywKk+GfbHesyALZMz8ox1mFfWcCE416Ij5F/1x0faNaxWH4vYMGCLVKVQOCe4U94576iQ1p/f8NF2WWxCvqhZh/VOH/r1ger3D8JMHru9ve7+vNubd9mvfl4d2hJfnG8eivkwG3/eK42ec2fmy+tBdjfhp8tPV5uT6Zfhw8XV1/O9Pt/9h01Yh8nwZPpne9PBuTyKOw9ZM5Dzi95DNiqCuXw8Oc3uuObn08NrVeblpCsePoTHD4Onu8/NUR2ywajnbpfDo/v1EGc4iUt+cnXe9L7s0mlZ3OTT+LfDmuz7ZKXntysnysm13V4fdnuDRTzYw8vBU/2wmXzIt0XYV6Ph6GAxucrm2dnm62rkDj7d8eJc53avuyjC92z05fJ6p9jXZ4t6/ri7y15nd/HyAsmTmUgp+neWxxSFRSD9/lO5Fjf5iz/Db1u8ZOu/RVZKPO1TMqF2gOlXkBXp9WtorqlEgKafSDItSQfIOUUq5T0ipR2Fnm7znXIBJW1EYUehZVMmK7D00rwBtlqEZlZWS9ZhociqMs8YsKpck+f3i1n5B7wOBMWQo4808otQN91fw3SeL2PdhOWKddBaa73nxgFbbrur1bgJzesMsi79HY+O2fNPJoDJWU4KAAA=", 
    
    // Bot Configuration
    PREFIX: process.env.PREFIX || ".",
    BOT_NAME: process.env.BOT_NAME || "✦ Silva ✦ Spark ✦ MD ✦",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "254743706010",
    OWNER_NAME: process.env.OWNER_NAME || "✦ Silva ✦ Spark ✦ MD ✦",
    DESCRIPTION: process.env.DESCRIPTION || "*© ✦ Silva ✦ Spark ✦ MD ✦*",
    
    // Alive Message
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/BVt9McxS/photo-2025-06-15-12-14-29-7516148628621099032.jpg",
    LIVE_MSG: process.env.LIVE_MSG || "> SILVA SPARK IS SPARKING ACTIVE AND ALIVE\n\n\nKEEP USING SILVA SPARK FROM SILVA TECH INC⚡",
    
    // Mode Settings
    MODE: process.env.MODE || "public", // public, private, inbox, groups
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    
    // Message Features
    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "true",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    
    // Reaction Settings
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "false",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
    
    // Status Features
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by Silva Spark MD 🚀🔥*",
    
    // Anti Features
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || process.env.ANTI_BAD || "false", // Alias for ANTI_BAD
    ANTI_DELETE: process.env.ANTI_DELETE || "true",
    ANTI_VV: process.env.ANTI_VV || "true", // Anti View-Once
    DELETE_LINKS: process.env.DELETE_LINKS || "false",
    
    // Anti-Delete Settings
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // 'log' or 'same'
};
