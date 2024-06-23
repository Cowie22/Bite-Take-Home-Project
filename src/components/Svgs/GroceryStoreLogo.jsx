import { memo } from 'react'

const GroceryStoreLogo = (props) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000"
      height="800px"
      width="800px"
      viewBox="0 0 56.823 56.823"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M36.272 25.308a1 1 0 001.268-.626 1.764 1.764 0 012.232-1.1 3.765 3.765 0 004.768-2.352 1 1 0 10-1.894-.643 1.761 1.761 0 01-2.232 1.1 3.77 3.77 0 00-4.768 2.352 1.002 1.002 0 00.626 1.269zM38.638 18.34a1 1 0 001.268-.626c.151-.445.466-.805.888-1.013s.899-.238 1.344-.087a3.765 3.765 0 004.768-2.353 1.001 1.001 0 00-.625-1.269.998.998 0 00-1.268.626 1.76 1.76 0 01-2.232 1.101 3.729 3.729 0 00-2.871.188 3.738 3.738 0 00-1.897 2.164 1 1 0 00.625 1.269zM41.002 11.372a1 1 0 001.269-.626 1.302 1.302 0 011.648-.813c.835.283 1.73.225 2.521-.164a3.282 3.282 0 001.665-1.899 1 1 0 10-1.894-.643 1.292 1.292 0 01-.656.748 1.288 1.288 0 01-.993.063 3.308 3.308 0 00-4.185 2.064 1.002 1.002 0 00.625 1.27z" />
      <path d="M48.246 25.234a1.3 1.3 0 00-.57-.213c1.987-6.457 3.077-12.783 3.233-18.808.049-1.895-.877-4.425-2.744-5.596-.896-.563-2.364-1.027-4.27-.046-2.987 1.541-5.123 6.074-6.839 9.718l-.292.618a5.79 5.79 0 00-3.169-4.012 4.77 4.77 0 00-3.708-3.687 3.093 3.093 0 00-.076-.309c-.381-1.302-1.53-2.282-2.859-2.44a3.4 3.4 0 00-2.125.437 3.626 3.626 0 00-1.768-.461 3.684 3.684 0 00-3.581 2.836c-1.901.518-3.295 2.263-3.31 4.291a5 5 0 00-3.41 6.658 3.928 3.928 0 00-.549 4.042c-.999-1.09-2.405-1.981-3.984-1.923a1.001 1.001 0 00.03 2c.034.001.065-.002.097-.002.937 0 1.808.62 2.442 1.34-1.586.457-3.498 1.201-4.39 2.883-.537 1.015-.6 2.26-.242 3.686a1.734 1.734 0 00-.25.983l1.702 24.187a5.696 5.696 0 005.691 5.408h28.071c3.036 0 5.536-2.375 5.69-5.39l1.745-25.028.001-.018a1.296 1.296 0 00-.566-1.154zM37.58 13.767c.396-.739.828-1.655 1.285-2.626 1.503-3.192 3.563-7.563 5.946-8.793.87-.448 1.619-.457 2.291-.038 1.159.728 1.841 2.565 1.808 3.851-.153 5.912-1.233 12.134-3.211 18.494-.065.209-.209.631-.414 1.21l-1.704.757a.93.93 0 00-.108.057 3.165 3.165 0 01-1.596.447 3.16 3.16 0 01-1.595-.447l-.713-.428a5.16 5.16 0 00-2.658-.738l-.034.002a5.152 5.152 0 00-2.692.736l-.712.428c-.397.238-.836.354-1.28.404.025-.087.054-.172.08-.258a72.685 72.685 0 012.041-5.939c.124-.317.245-.637.373-.951a66.563 66.563 0 012.893-6.168zm-12.748 2.372c.117-.15.231-.296.339-.438l.002-.004c.079-.105.148-.214.206-.323.246-.463.304-.983.19-1.491l4.174-.913c.028.128.058.255.106.373.187.458.521.839.986 1.105.152.084.311.168.475.255.135.071.27.145.406.219l.196.106c.119.067.234.141.35.214.099.061.197.124.293.191.111.077.217.162.323.248.093.076.182.159.27.244.095.093.189.188.276.292.154.184.302.375.423.604a70.356 70.356 0 00-1.209 2.854c-.06.149-.124.294-.183.443-1.096.278-2.155.798-3.463 1.729-1.648 1.171-2.875 1.482-4.897 1.189l-.607-2.779c-.412-1.879.481-3.017 1.344-4.118zm4.959-6.073a.413.413 0 01.17.809l-5.524 1.209a.42.42 0 01-.492-.316.419.419 0 01.316-.492l2.935-.642 2.595-.568zm-3.232 15.467c-.076.005-.153.007-.229.015a5.13 5.13 0 00-1.594.423l-.191-.875c.288.024.575.048.844.048 1.744 0 3.148-.519 4.762-1.667.508-.362.958-.636 1.386-.863a72.43 72.43 0 00-.272.783c-.064.188-.133.373-.195.562a73.64 73.64 0 00-.835 2.692l-.665-.398a5.16 5.16 0 00-2.658-.738l-.037.002c-.106-.002-.211.01-.316.016zM14.598 15.192l.655-.54-.425-.733a3.006 3.006 0 012.482-4.515l1.214-.051-.283-1.182a2.464 2.464 0 01-.072-.578 2.49 2.49 0 012.29-2.471l.924-.07v-.995a1.68 1.68 0 011.677-1.622c.522 0 .896.238 1.117.438l.701.633.672-.664a1.416 1.416 0 011.167-.396c.536.063 1.02.481 1.176 1.018.053.18.068.354.047.531l-.117 1.117h1.126a2.753 2.753 0 012.738 2.557l.045.657.621.218a3.812 3.812 0 012.556 3.683 3.61 3.61 0 01-.656 1.985c-.669-.568-1.39-.951-1.996-1.27-.157-.083-.309-.163-.462-.248-.043-.024-.095-.066-.113-.171a.57.57 0 01.139-.444 2.147 2.147 0 00.47-1.847l-.121-.551a2.117 2.117 0 00-.933-1.339 2.114 2.114 0 00-1.604-.288l-.268.059-.009.001-2.935.642-2.864.625a2.113 2.113 0 00-1.338.933 2.116 2.116 0 00-.289 1.605l.06.272v.003l.001.004.059.271a2.127 2.127 0 001.237 1.497.606.606 0 01.331.323c.026.074.011.112-.047.208v.001c-.099.133-.206.268-.315.407-.11.14-.224.287-.34.439-.039.051-.076.104-.115.156-.083.113-.166.228-.248.348-.045.065-.088.132-.132.2a8.492 8.492 0 00-.344.58 6.79 6.79 0 00-.21.437c-.029.064-.06.125-.086.192a5.515 5.515 0 00-.228.686c-.01.038-.014.079-.023.118a5.454 5.454 0 00-.112.635c-.01.088-.012.18-.018.271-.008.118-.023.23-.023.353l-.012-.015-.041-.052a11.905 11.905 0 00-.69-.824 9.393 9.393 0 00-.442-.448c-.048-.045-.096-.094-.145-.138a6.915 6.915 0 00-.564-.456c-.053-.038-.107-.07-.16-.106a5.387 5.387 0 00-.638-.37 4.344 4.344 0 00-.45-.189c-.05-.018-.1-.042-.15-.058a4.17 4.17 0 00-.495-.125c-.019-.004-.038-.002-.057-.005-.034-.006-.067-.019-.101-.024-.116-.017-.226-.01-.34-.018-.08-.005-.159-.022-.239-.022-.024 0-.049.006-.074.006-.155.002-.305.02-.456.039-.075.01-.15.016-.225.03a4.685 4.685 0 00-.577.146c-.029.009-.057.016-.086.026-.498.169-.97.408-1.412.697a1.906 1.906 0 01-.139-.716 1.947 1.947 0 01.714-1.506zm-6.425 8.303c.423-.797 1.45-1.405 3.233-1.915a5.397 5.397 0 002.236-1.283c.285-.273.552-.504.81-.714.806-.655 1.501-1.011 2.13-1.092l.042-.005c.199-.022.392-.016.579.017.049.009.099.026.149.039.093.023.185.046.278.083.06.023.12.058.181.086.087.042.173.08.26.133.068.041.136.094.204.141.081.057.162.109.244.175.076.061.152.135.228.204.076.069.152.132.228.209.084.085.169.184.254.279.069.077.138.148.208.231.095.114.191.244.287.37.061.08.121.152.182.237.109.152.219.321.329.489.048.074.097.14.145.216.159.251.319.518.48.802.736 1.299.98 3.218.66 4.889-.053-.005-.105-.013-.158-.021a3.106 3.106 0 01-1.082-.387l-.713-.428a5.16 5.16 0 00-2.658-.738l-.034.002a5.152 5.152 0 00-2.692.736l-.347.208a3.874 3.874 0 01-1.961.552 3.862 3.862 0 01-1.961-.552l-1.345-.808-.001-.001a1.713 1.713 0 00-.564-.213c-.157-.791-.101-1.431.169-1.941zm36.901 27.818a3.698 3.698 0 01-3.694 3.51H13.308a3.702 3.702 0 01-3.695-3.529L7.949 27.652l.87.522a5.871 5.871 0 003.058.838 5.869 5.869 0 003.058-.838l.347-.208a3.152 3.152 0 011.595-.448 3.158 3.158 0 011.596.448l.713.428a5.143 5.143 0 002.934.718c.09-.004.18-.004.271-.012.011-.001.021-.007.033-.008a5.142 5.142 0 001.971-.644c.058-.021.12-.022.174-.054l.713-.428a3.152 3.152 0 011.595-.448 3.158 3.158 0 011.596.448l.713.428a5.166 5.166 0 002.446.723l.052.003c.292.009.584 0 .874-.041.166-.021.327-.063.49-.1.079-.019.158-.036.236-.059a5.127 5.127 0 001.284-.527l.713-.428a3.152 3.152 0 011.595-.448 3.158 3.158 0 011.596.448l.713.428a5.16 5.16 0 002.679.734l.046.003c.898 0 1.797-.234 2.603-.704l1.962-.872c.042-.019.072-.055.111-.079l.153-.068-1.665 23.906z" />
      <path d="M11.911 43.004h7a1 1 0 100-2h-7a1 1 0 100 2zM11.911 47.004h9a1 1 0 100-2h-9a1 1 0 100 2zM22.911 49.004h-11a1 1 0 100 2h11a1 1 0 100-2zM28.911 49.004h-2a1 1 0 100 2h2a1 1 0 100-2z" />
    </svg>
  )
}

export default memo(GroceryStoreLogo)
