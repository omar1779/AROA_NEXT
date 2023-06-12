import ImageFallback from "@/components/ImageFallback";
import MDXContent from "@/components/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
const About = () => {
  const data: RegularPage = getListPage("pages/about.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <div className="text-center md:col-10 lg:col-7">
              {image && (
                <ImageFallback
                  className="mx-auto mb-6 rounded-lg"
                  src={image}
                  width={200}
                  height={200}
                  alt={title}
                />
              )}
              <h2
                className="h3 mb-6"
              >I AM ANA !</h2>
              <div className="content">
                <MDXContent content={"orem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum nesciunt commodi vel nisi ut alias excepturi ipsum, totam, labore tempora, odit ex iste tempore sed. Fugit voluptatibus perspiciatis assumenda nulla ad nihil, omnis vel, doloremque sit quam autem optio maiores, illum eius facilis et quo consectetur provident dolor similique! Enim voluptatem dicta expedita veritatis repellat dolorum impedit, provident quasi at."} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
