<template>
  <Head>
    <Title>About | {{ $config.projectMetadataTitle }}</Title>
    <Meta property="og:title" :content="'About | ' + $config.projectMetadataTitle" />
  </Head>

  <div class="card border scroll-500">
    <div class="card-body">
      <p class="fs-3" @click="$router.back()">
        <i class="bi bi-arrow-left-circle cursor-pointer"></i>
      </p>

      <h3 class="mb-3 mt-3">Always Liquid NFTs.</h3>

      <p class="text-break mt-3">
        AlwaysLiquid is a social NFT launchpad and marketplace, where NFTs are always liquid.
      </p>

      <p class="text-break mt-3">
        This means that you can always sell your token back to the pool and receive ETH for it - unless it's the last NFT in the 
        collection. In that case, you can wait for a new mint.
      </p>

      <p class="text-break mt-3">
        NFTs created via the AlwaysLiquid platform are ERC-721 tokens, which means that they are fully compatible with all 
        NFT marketplaces. You can list these NFTs on any marketplace, or send them to anyone without restrictions.
      </p>

      <p class="text-break mt-3">
        In addition to being liquid, NFTs also allow for social features. Minting an NFT unlocks a hidden chat room for that NFT, 
        where you can chat with other NFT holders.
      </p>

      <p class="text-break mt-3">
        <strong>50% of all fees collected by this platform goes to public goods funding on Fantom</strong> (via the official Fantom's 
        <a target="_blank" href="https://ftmscan.com/address/0xb21b972B2aA69a01C6f7e6C19717126C7cD7559F">Ecosystem Support Vault</a>).
      </p>

      <p class="text-break mt-3">
        Brought to you by the 
        <a target="_blank" href="https://fantomname.org">FantomName.org</a> & 
        <a target="_blank" href="https://punk.domains">Punk Domains</a> team, built with the 
        <a target="_blank" href="https://iggy.social">Iggy web3 framework</a>.
      </p>

      <h5>Useful links</h5>

      <ul>
        <li><a href="https://fantomname.org" target="_blank">FantomName.org (get your .fantom name here)</a></li>
        <li><a href="https://github.com/AlwaysLiquidNfts" target="_blank">AlwaysLiquid GitHub</a></li>
        <li><a href="https://github.com/punk-domains-2" target="_blank">Punk Domains GitHub</a></li>
        <li><a href="https://github.com/iggy-social" target="_blank">Iggy GitHub</a></li>
        <li><a href="https://discord.gg/8dSrwrAQeu" target="_blank">Discord</a></li>
      </ul>

      <hr />

      <h5>Feedback</h5>

      <p class="text-break mt-3">
        Feel free to share ideas, features suggestions, rants in our Discord. 
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>