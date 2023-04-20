import { twMerge } from 'tailwind-merge';

type NavProps = {
  opened: boolean;
};

export function Nav(props: NavProps) {
  const { opened } = props;

  const openedClassName = opened ? 'block' : '';

  return (
    <div
      className={twMerge(
        'hidden w-full bg-layout-background fixed top-16 left-0 h-[calc(100vh-4rem)] z-20 p-6 overflow-y-auto md:block md:w-64',
        openedClassName
      )}
    >
      <nav>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente qui corrupti culpa
          vitae autem modi fugiat laborum consequatur minus quidem facere minima ad delectus non,
          quae voluptatem doloremque, laboriosam nulla repellat repudiandae eaque libero
          praesentium? Obcaecati quod hic porro magnam molestiae magni praesentium voluptatum
          reprehenderit asperiores officia, et sapiente nisi tempora a expedita nam? Alias rerum
          molestiae veritatis explicabo recusandae nisi sint necessitatibus praesentium natus
          laudantium. Tempora magnam rem in quos, similique iure! Doloribus sapiente repellendus
          voluptatibus ipsam minus. Sint excepturi dicta facere illo tempore quae quos commodi fuga
          hic ea perspiciatis sit sapiente corrupti pariatur nam, quidem, sunt repellat? Temporibus
          praesentium amet sit repellat! Quod officiis hic nam error et sequi, libero aspernatur
          esse nemo nostrum culpa doloremque fuga odio iusto aliquid? Quaerat velit accusamus quod
          tempora, soluta corporis non repudiandae quam ea, laborum quisquam, neque ad? A aperiam
          accusantium soluta error. Recusandae, libero vitae. Expedita natus tempore sunt
          doloremque, dolores laborum quibusdam molestiae sequi voluptatibus ducimus perspiciatis
          error possimus quo tenetur aliquid eius corporis similique illo. A unde suscipit, culpa
          sunt ipsum possimus incidunt quos voluptatibus doloribus consequatur quasi libero amet
          cumque veniam hic sint explicabo fugiat, dignissimos quod quis qui et porro delectus.
          Veritatis animi porro libero. Voluptates, nulla corporis quod reprehenderit ab
          repellendus. Facilis officia, quaerat quis repudiandae quisquam nulla sapiente, dicta
          magnam, perspiciatis expedita aspernatur ipsum! Dolorem asperiores facilis fugiat soluta
          laudantium, doloremque nam veniam animi corporis? Laborum expedita rerum provident
          ratione, suscipit quam non maiores possimus. Expedita, iste? Molestiae autem possimus
          tenetur in accusamus modi rerum cum odio voluptates beatae hic esse, fugit alias
          aspernatur porro consectetur atque! Neque, nam ipsa? Esse tenetur rem sequi minus quas
          possimus libero, ad et delectus. Dicta ratione vero, enim dolorem incidunt sed eos sequi
          suscipit ab rem modi repudiandae tempora, laboriosam laborum! Minus culpa voluptates saepe
          libero! Quibusdam, laborum. Architecto tempora accusamus sunt quo, ratione vero ipsa
          commodi vel eligendi! Vel, hic mollitia. Eaque asperiores ducimus obcaecati quis, veniam
          quaerat delectus illum eveniet facere qui! Tempore est similique aliquam! Ad architecto
          sunt doloremque, maxime non magnam a eum facere exercitationem animi unde aliquid illum?
          Iste veniam suscipit magni omnis id fuga nobis ducimus libero, totam voluptate veritatis
          neque corporis cupiditate, asperiores doloremque ad! Veritatis, sed eum voluptatibus
          tenetur maxime possimus corrupti temporibus hic pariatur aliquid quam dolores cum incidunt
          ipsa adipisci, at modi tempore fugiat consequatur neque! Vel vero asperiores maiores quasi
          ipsum ducimus facere. Voluptatem laboriosam dolorum provident totam deleniti. Provident
          animi modi repudiandae tempora accusamus assumenda corporis, molestiae aperiam. Ipsum
          temporibus voluptatibus eaque vero facilis, ad veritatis dolor est animi delectus
          voluptatum ut praesentium! Atque illo odit voluptate, vitae assumenda mollitia, non error,
          iure quibusdam quae sed doloremque ipsam incidunt provident. Veritatis impedit quisquam
          nostrum mollitia? Saepe optio sunt vitae ipsum quaerat eius aut, quo perspiciatis est iste
          quidem quas recusandae dicta cum assumenda? Odio fugit iste labore voluptatibus aspernatur
          assumenda unde cumque exercitationem consectetur error rem obcaecati sit perspiciatis in
          maxime eum optio eos magnam ipsa consequatur velit, explicabo nesciunt culpa? Illum nobis
          ullam at facilis fugiat aliquam, adipisci vitae ut hic quibusdam, nesciunt exercitationem
          deserunt enim aliquid iure, corrupti ratione nostrum vero itaque. Deserunt dolorum odit
          quae magnam corporis? Error temporibus reiciendis, obcaecati dicta soluta eum eaque vel
          sit quia corrupti magnam aliquam culpa quas facere ab iste voluptatibus, cum debitis nam
          molestiae ducimus veritatis ea dolore! Ea velit saepe vero necessitatibus, quia laborum
          cupiditate nostrum dolorum officia minima? Eius incidunt a amet, deleniti veritatis
          adipisci animi sunt consectetur error sequi molestias vitae omnis. Corporis perferendis
          architecto ad error sequi placeat et dignissimos repudiandae velit dolorem libero
          asperiores, doloribus delectus nisi. Voluptatum libero commodi, distinctio possimus rerum
          soluta est voluptas quam. Sapiente reprehenderit nobis numquam itaque placeat iusto illum
          cum, qui accusamus commodi odit voluptatibus quia cumque ad vitae similique pariatur
          veritatis, accusantium fugit? Dicta minima perspiciatis dolorem laboriosam, beatae alias
          rem aperiam doloremque iste sed maxime cum eum explicabo animi accusamus doloribus, non
          maiores ab modi vitae dignissimos odio ex! Dolore repudiandae ipsum praesentium, saepe
          quae corporis eveniet explicabo voluptatum omnis aliquam, maiores obcaecati consequuntur
          placeat quod provident eius. Vitae provident deleniti voluptatem dolor ducimus, suscipit
          omnis officia tempore, possimus repellat sint repudiandae totam, eaque ipsum error aperiam
          odit quae odio. Voluptatibus similique fuga doloremque accusantium molestias maxime,
          veniam sequi, sit reprehenderit consectetur iusto ad fugit error quisquam vitae recusandae
          nostrum dicta alias omnis? Laboriosam maxime cupiditate, ullam voluptate dolore expedita
          nesciunt praesentium quo ab iusto voluptatum voluptas nihil ipsum eligendi at repudiandae
          quasi commodi nisi qui possimus atque dolorum ducimus minima cumque! Libero eveniet
          accusantium temporibus consequatur facilis? Ab facere labore molestiae sed ea enim
          delectus ex perspiciatis aliquid, deserunt, nesciunt eos quod debitis provident temporibus
          officia magni. Voluptate nihil, quibusdam officiis fugiat expedita quis consectetur animi
          ipsum odio iste. Deserunt asperiores expedita dignissimos non recusandae blanditiis
          dolorem aperiam maxime, perspiciatis vitae ab possimus ullam ipsa doloremque tenetur
          beatae dolores, illo voluptate, corrupti consequatur. Nobis ducimus ut ullam molestiae
          harum cum maiores quibusdam inventore architecto ipsa laudantium aliquam distinctio
          mollitia corporis modi, cumque itaque optio? Quasi odit, modi reprehenderit laborum vero
          alias optio veniam, officiis quo eos quaerat laboriosam nostrum ut mollitia dicta in
          voluptates assumenda corporis quis id, labore asperiores? Ratione minima in omnis vero
          adipisci soluta, aperiam id facilis dolore repellat, distinctio sequi harum obcaecati
          porro amet perferendis ducimus autem illo magnam ea ipsa dolorum! Neque iusto praesentium
          ducimus distinctio deserunt, eveniet doloremque. Nobis quia, incidunt vero voluptates
          aliquid dolorem odit excepturi minima voluptate mollitia nostrum dolorum quibusdam
          corrupti assumenda amet omnis pariatur consequuntur harum neque. Voluptas aliquid fuga
          maiores fugit repudiandae autem nihil ipsum provident ab aperiam, mollitia dolore porro
          dicta asperiores incidunt sed assumenda sunt optio tenetur cupiditate! Dignissimos tenetur
          nobis cupiditate ipsam quibusdam est, deserunt non reprehenderit ratione officiis expedita
          impedit voluptates reiciendis similique iste voluptate. Ea aliquam esse perferendis vitae
          rerum quasi! Praesentium nulla eius natus minus, tempore ratione eos molestiae ipsum illo
          aut, officiis beatae commodi deleniti dignissimos consequuntur cumque voluptate error sed.
          Reprehenderit sapiente sequi tempora velit dolor ea eaque ex quas quis, dolore quo
          voluptates doloremque saepe obcaecati blanditiis eum debitis expedita, possimus nobis
          beatae repellat qui. Iusto, temporibus harum quae nostrum provident itaque rem. Accusamus
          est illo, amet, a quibusdam temporibus facere voluptatibus sapiente magnam quis repellat
          enim, totam alias error consequatur nihil ab magni aspernatur omnis? Sit, perspiciatis ut
          atque eaque qui excepturi quo explicabo nemo consectetur. Quas, modi commodi fuga sed nam,
          doloribus possimus corporis qui a quaerat beatae eaque voluptas magni cumque sit esse
          repellat, voluptates delectus quod sint incidunt quo assumenda! Commodi, quaerat autem hic
          recusandae quisquam exercitationem vero consectetur. Facere, nesciunt est nostrum vitae
          perspiciatis similique autem, voluptates ipsum qui repellat ea. Nisi culpa ad quisquam
          magni! Reprehenderit nisi vitae doloremque omnis tempore consectetur nesciunt esse
          deleniti dolorum inventore nulla culpa, perspiciatis accusantium soluta tenetur veritatis
          ea necessitatibus delectus asperiores. Laborum temporibus maiores, hic reiciendis
          assumenda nam quod consequuntur quidem eos. Maxime dolores odit tenetur alias obcaecati
          quae perspiciatis, error blanditiis ex, quam optio totam, hic perferendis officiis?
          Aliquid, suscipit vel? Autem quam eligendi quibusdam fugit commodi necessitatibus enim nam
          iure. Dolor maiores pariatur sunt, iusto corrupti odio, minus nisi aliquid veritatis harum
          nesciunt porro reiciendis, alias eaque ipsam excepturi cupiditate obcaecati. Quisquam
          iusto provident vel quae ipsam magnam facilis ipsa error ea cupiditate ullam nam
          recusandae sit neque possimus, amet laudantium eos doloribus sunt repellendus esse, dolore
          deserunt earum? Odit tenetur ipsum unde quasi! Unde ipsum in ea. Provident aut natus
          placeat inventore assumenda nisi est dolores doloremque laborum facilis. Beatae corporis
          dicta sint libero, adipisci voluptatum quas blanditiis quod ad voluptas molestias magnam
          suscipit quaerat eius? Quam veritatis sit dignissimos dicta aliquam sunt dolorem officia
          omnis harum hic esse autem labore quasi cumque quibusdam fugit similique obcaecati vitae,
          et eius! Fugiat est dolore corporis iusto error reiciendis at provident? Voluptatem id
          inventore earum deleniti quis dolorum, placeat aspernatur dignissimos corrupti voluptate
          accusamus rerum recusandae eius tempora eos harum quos. Minus similique neque, ipsum saepe
          rem perferendis corporis quam illum sed, harum ipsam beatae deserunt incidunt commodi
          ducimus iste, dolores aliquam libero corrupti est! Rem explicabo aspernatur deleniti
          molestiae dolor, assumenda maxime, pariatur necessitatibus corporis minima optio, itaque
          voluptatibus voluptatem? Modi possimus magni laborum commodi placeat dolorum neque quas
          recusandae quibusdam, ullam maxime, aliquid voluptatum dicta asperiores odit numquam
          facilis! Quas commodi eum error dignissimos expedita, quaerat, perspiciatis doloribus hic
          ad recusandae debitis similique nam voluptatibus dicta neque quia saepe molestias?
          Necessitatibus dolores distinctio provident libero culpa nisi adipisci qui excepturi
          dolorem, hic voluptatum accusamus facilis, explicabo vel error perspiciatis doloribus
          minus aspernatur quo? Iusto, sapiente? Iste inventore laborum, beatae provident
          consectetur eligendi animi fugiat perspiciatis. Fugiat eos dicta, illo tempora harum
          eveniet. Cupiditate doloribus ab quae cumque expedita pariatur illo modi deserunt tempora.
          Dolore architecto eveniet quasi aspernatur odit laboriosam natus possimus dicta nihil
          voluptas, magni itaque libero accusantium illo asperiores at consequuntur doloremque illum
          saepe ullam maiores? Aspernatur, debitis. Temporibus unde aliquam impedit iusto, sed
          exercitationem deserunt ipsam, beatae reiciendis, qui totam eum eius similique id
          cupiditate laborum nam? At vel dolore, facilis itaque obcaecati autem in deserunt velit
          animi aperiam et optio quidem voluptatibus possimus. Ipsum optio et hic iusto blanditiis
          minima placeat nihil, delectus cum nisi commodi magnam est maiores alias vel iste!
          Corporis repudiandae veritatis labore cumque fugiat fuga dolor similique nisi sint,
          impedit accusantium. Aliquid molestiae dolor doloremque nulla accusamus quia, ipsa labore
          quas recusandae quis nesciunt perspiciatis nemo possimus vero sed ea voluptatibus velit
          perferendis est impedit quos eveniet, distinctio pariatur! Delectus maiores doloribus hic
          excepturi et at aliquam officia earum explicabo, reiciendis aperiam harum. Cumque autem
          nam provident debitis maiores. Nesciunt illum, cum modi accusamus eum laboriosam. Tenetur
          minima illum porro quia. Ad illum ipsum expedita animi cupiditate rem quia voluptates sed
          sequi architecto aspernatur, impedit excepturi! Ad, numquam blanditiis. Distinctio nobis
          corporis inventore, accusamus vero dicta magnam officiis, expedita veniam illum error?
          Voluptatum quia enim possimus optio pariatur aliquam quae. Velit qui rerum tempora in
          vitae repellendus numquam quasi. Quo ab obcaecati nisi accusantium, delectus minus sint
          officia nihil incidunt at veniam a architecto quas eligendi placeat beatae laudantium
          illum repellendus nesciunt. Nostrum ut possimus deleniti expedita illo est debitis,
          aspernatur tempore odio natus nemo, quibusdam quo aut perspiciatis veritatis vitae quaerat
          maxime doloribus quae? Sed voluptas mollitia, itaque illum asperiores accusamus fugit
          aliquid eligendi dignissimos rerum nesciunt odio nulla aliquam quidem dolor delectus
          dolores, libero rem labore? Eius ipsam soluta ex amet dignissimos voluptatibus culpa
          tempore itaque, doloribus incidunt quae quaerat aperiam eaque cumque pariatur. Quae
          voluptatem dignissimos amet quo eligendi et, rerum officiis incidunt iusto enim sunt
          soluta iure dolor nisi facilis obcaecati odit, eos cumque itaque corporis provident
          corrupti quidem blanditiis laborum? Alias nisi doloremque, dolor natus modi ex laborum
          quibusdam ipsa voluptates facere veritatis velit odio, assumenda placeat accusantium,
          magni asperiores! Dignissimos totam commodi rem molestias expedita at! Aperiam at libero,
          adipisci sequi facilis, sunt cum natus, minus voluptate odio nisi veritatis odit ipsam.
          Doloribus nam earum, tempore a eius consequuntur dignissimos, quae repellat soluta esse
          accusamus animi ea possimus voluptas. Voluptatibus impedit dolorem fugiat fuga cupiditate
          nemo repellendus, voluptatum quidem placeat velit quam natus. Tempora earum possimus
          nesciunt modi recusandae, ab maiores iusto dolorum accusamus sit sequi quaerat laudantium!
          Tempora aliquam reiciendis molestiae, rem commodi rerum? A at neque dolor consequatur
          natus veniam temporibus ab consequuntur, quibusdam, voluptatibus alias perferendis error,
          voluptatum magnam explicabo ad! Eligendi distinctio officiis voluptas ducimus consectetur
          et expedita doloremque quae nulla temporibus qui repudiandae totam praesentium quam porro
          dolor accusamus blanditiis labore quos corporis necessitatibus, aspernatur in nam fugit.
          Cumque dolor, ut saepe accusantium asperiores, et assumenda eum officiis dolores eligendi
          iusto repellendus eius beatae, nihil tempora. Libero eveniet quos veritatis vitae illo
          numquam architecto quas dicta, quia, alias eos atque adipisci et omnis commodi ullam
          doloribus a dolorum est tempore! Excepturi esse repellendus magni dolorum, rem ab, aperiam
          animi atque soluta velit et impedit, dicta pariatur quasi modi aliquid amet? Recusandae
          asperiores maiores iure animi quas voluptatem aut quam, repellendus molestias dignissimos
          veniam dolores! Perferendis, deserunt harum alias tempore totam amet sequi maxime incidunt
          eos.
        </p>
      </nav>
    </div>
  );
}
