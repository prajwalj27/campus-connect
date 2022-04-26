import React, { useState, useEffect } from "react";
import { GoVerified } from "react-icons/go";
import axios from "axios";
import moment from "moment";

import "./Posts.css";

const Posts = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  const updatePartyCount = async (postId) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/api/posts/party/${postId}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  const updateLikeCount = async (postId) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/api/posts/like/${postId}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  const updateLitCount = async (postId) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/api/posts/lit/${postId}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/posts/");
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getPosts();
  }, [posts]);

  const postList = () => {
    return posts
      .filter((post) => {
        if (search === "") {
          return post;
        } else if (post.content.toLowerCase().includes(search.toLowerCase())) {
          return post;
        }
      })
      .map((post) => {
        return (
          <div key={post._id} className="post">
            <div className="postDetails">
              {post.author === "Prajwal Jaiswal" && (
                <img
                  src="https://user-images.githubusercontent.com/66217883/164365827-1875f4b0-11f0-44bb-b527-d9a90ae72ce8.jpg"
                  alt="user"
                />
              )}

              {post.author === "Hrishikesh Joshi" && (
                <img
                  src="https://www.clipartmax.com/png/middle/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png"
                  alt="user"
                />
              )}

              {post.author === "Anita Chauhan" && (
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUYGRgaGhwaGhwaGhoaHh4aHBoaGhweGhocIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISGjQhJSs0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NzQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIANwA5QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xABAEAABAwEFAwkFBgYCAwEAAAABAAIRAwQFEiExQVFxBiIyYYGRscHwE1Kh0eEUI0JTcpIHYoKi0vEzspPC4hX/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQEBAAIBBAICAwEAAAAAAAAAAQIRMQMSIUEiMgRRQoGhYf/aAAwDAQACEQMRAD8A6NqkmThIHVFv6DuHmiIQ9v8A+N3DzSvFOcrLKyGAK+FVQ6I4K1MiSShOEA6cJQnQDBOlCeEAwTpJQgEkAnhOgGhJPCZAJDMb944wdAiSh29M9ngl7gXwkApJkwZMQnhJAMmTpIBimlSTICMJJ0kAPCeEmhOEBJUW08x/BEQqLd/xv/SUrxRFtDohTChZjzRwViYJIBJSCASkEgnhAMnQl53nToMx1HRuH4jwC88vzlhVqy1hLGbmnnEdbvIJWnI9Ctl6UafTqMadxOfcM1lVeWNmaYDnHg0+cLy4vJ2kz8U2EKe6qmMeqUOV9mcYxub+ppC2bPamPGJjgQdoMheHuAGf+u/ai7nvx9neHMdltbnBHanMiuL21RKz7ovanXYHMcCYEjaCdhC0SqSaEO0c857vj/pXlyoEYzvgdyXuASmKQTymDQmhPKSAiUk6SAZNCdNKAUFJJJAUAJwmhTQCCptvQf8ApPgrgFVbh92/9J8ErxRErLmwEbldCGu9vMbKLhOBGFIJAKQCAULIv6+2WZmcOeei3zO4I68bayixz36NHedgHWvIr1vF1Z7nv1cchuGzsCDkRvW8n1Xl73Ek+oA2BZqvDDqoPOHP1wSpw7DGp7fkpM52zmjZtJ60PTaX5nJo9dpXWcm7nxuDi3mjRZZ5dsa4Y3KhbJyfqVGzEDZ9FVbOSVRgmZ6l6lQoNaAAIVdrY0grkvVzl3t1TDC+NPILDbX0n5Ese06jz2HgvWuT17NtFIOyDxk8de8dR1XnnKiyYH42jXVPyOvb2dYNOTX809R2H1vXV08+6SuTqYdtserEKgDnk/yjxKvYZVTW8857AtvcYrkiEgI1ShMFCSQKSAZJOmKASYpJIBkkoSQFII3pY27x3rOFzUfc/ud81Y256H5Y7z80AZ9oZ7ze8Ie2WthY5uNskEahJt1UhoxvcrWWNjdGNHYEr5BWe0Ma0AvaMhq4DzUxbaf5jP3NTuszHdJjTxATCx0/cZ+0Jg//AOhS/MZ+8fNIXjS/MZ+4JxZGe4z9oQl7vpUaT3uYzmg/hGZhAcdy4vYPeKbHSxmeW13081xzGlxjvRFpqF5L3ZYjJ6tsBU0nmDhET+I6NHzUq0uqvDctTsHrRC4JMv7GjbwHmrvY4Z1xbSdfor7HSbMvM7zkfNK3UVjj3UTcVgFWoA5zQB+GfBeo3dY2saAFxdns1F4bmGuGh6LvjqF3NkfLJ3DasbO7y6p8ZoSWhA2mkVmXzeZDSxjocdu0LMsDH9J9aqf6oHYsM5LwvGWKeU9kxUifxNzC8+o14fK9Qt4lkYsbTlJjEOMaheUWkYKjmn8LiOxafje4z/InFey3HfOOk0ljyQAJaMU7NhWrSqklzyx0QIGWI9krhOQF7YT7JxyPRPWfrHevRsS6p5cmU1Qgto2Mf2NHzT/az+XU7h/kiZSxFUkL9qP5T/7P8kvtTvyn/wBn+SJlKUAK61u/Kf8A2f5JvtTvyn97P8kXiSQAn2h/5T+9nzUDan/kvn9TUdEoei/nOHWUBSbTU/JP7x8k6KSQFMbdqkWyEwUggHAThMn4oBwFIKKdoQEwFxX8Rbxa1jKU84nG4DY2CB2kz3LsqlRrGl7jDWguJ3ACSvHOUloNR/tXdN7nPj3WThY3+09wO1KnGW+tiMQIHwRlmph7iXTgptxEDKdwHFZLDvWtdgL2vYNXuY0d+fj8Er4isZutGwWQV6rs4xvJbOUg55TqepbdfklTDHBziHbDl5jrXX3fcrGUWswg5ZyAZ4zqoOuZuyWjc1z2jua4BRbZ5dGOE1pyl03PgaG45GkOl3d1dS0bDZLQX1fYWgMosDWgOZ7QF8S4MzBDRLdDEkhazblaTDnvjdjqeGKCtNlNjGBjGhrWiABkPgp3rG1dx3ZHnWGqcbqrg+o17mFrThGWhAyyIIOc6oOpUtOPm06YaBrh17ZldRabvD6hcJBOsRmRpIORyy35ap3WJ4+ktH/ssZ1Jq+GmXSvhl3VSe9pdDmdUzHYciFwd7tJqvcSJxuaY0lpiR1FenPpvDYbgaI1kv+ENXmV9MDarmhxcA4yTEkuzccstVfQs7qx/Il7YlddtNOo07AR9V7ddNqFSm1wM5arwUNXq/IG1F1JrSRoR1y3Lwwro4rl5jsJSTpiqSaUpSTAoB00JJIBnD1/pD2fpO4nxV/ch6fTcl7AlJRlJMKwVMKDVMoB2hPKi0pNAQE04KipNQGVypBNme1uryxn73tb5rznlBRl4A0xOY0bm02sa2OOZ7SvT76ZioPyzaMY4sOMfFoXltodifJ0bLR+omXfAnuSqowLWzC6OrwXSchLKH12DY0l5/pAj4lcza6kvdw8l1H8MXgWog6mmY7C2UZTwrC6yeuh0LJvK2uxBjOkclrELlbdeJoVnvNJ782tGGIYDtM6SSM+pY5W+I6un78bbNOk5jcoc6M5MTwKovC9G02c5sGEY5lcifZs4YyTpOsQsW3uLTz6DjlOw5b+CMsdY6kXhLct+L/YOyXkHgkAyNciFrWe0AjqWMbYxg5zXMnLnCBmJHO0VtkJzzkQSCNI9FcU8bdF/6MtjwQQvGryfiqOO8k95K9VttXCx73aBpPcF5FVeXEuO3NdP4s82uP8ALs1IIpZtC7j+HVoIqYCcjmOMR5eC4WzO2LrOR78NopneYPb9YXTXJi9bJUUyRVJOkmlJAJMSkAlKAXchmdNyJKGYee71sS9mIngkm9b0kyQUgogpwgJhIJKIPUUBYnaVAKYQA951QyjUcdAxxj+k5Lye2nC1rdsYncXZ+C9Rv0j2DwdDhaeBcAV5Nb3yXHcIHYIHgoy50vHhiPEknfJRNz3i6z1mVW/gcCRvGjh3EpqrIHZ8ggahVxPD6Eu+3MrMa9jsTXCQR61UxZmkvJE4wAez0F5r/DS3OaXsklpM4dkxs3L06hUDgssp5dGOV1sNgqUwcFR0bARiEREZ6abEPab6fnIYMo0dp62LSrU8lmV7MTrCWWWo1wkvM3/jGtmK0DA8hzMphuEHo5Zn+VE+xbTYGNEbhuaPQVgo4cysa+b1bTa5zjoMgNVw23LLUdHxnHiM7lreIZQLAc380cPxHu8V500Iu8re+s/E7g0bgqQ3Jd/Sw7MdPP62fflucIM1C6Tk8/DUYdzweyQuepMkreuqmQ9mwF8T2fUKs+EYvZQ7RKUFdtfHSY7bEHiMiETiTlTYslIFVynlUSyUlEFSQDEodo559bFeShm9M+tiV5hr5TJuxJMB21H+4P3fRSFR/uD930VoThBKi+p7jf3fRRfUqDPA2OJ7zkrmuz2fVSqHmnKcigKWGoRILPiVP7z+XvKawHmNHUiZRAw+UlR7aD5wgCJjiD8l5bbcm8fP/RXo3LevFEN952fACfGF5reL8gOv6KL9lz6qauccJ7yYQNTVGudzZ4xwGSHDZ7lUS6TkJUioexepgHpNOfwK8e5K1sFXqK9dsNYECFN503x+sq6rbS0c5pHDMLNr3u0ArQtDJC5q8aMFY9Xw26d2ha72c/JozO1c3yjb926czC26LM1jcqHczCNZHcubp/eNc/pXI06MjcivZCMz3fVDOVgPNOS9GvOi1rwMmjtW3clPE9omMzr17fguboHPNdPyUfieQdRB7BkCOE/FRlFSu2uZr2lzA8D8Q5s5HXy71qGm/wB9n7D81lg4H4vdM8Wnmu7jhW0XdyUvpN/aj2NT81v7fqm9nV/NZ+z6q+E4KqUaUhlb81n/AI/qpinVOtVo4U/mVaCpgqyUfZn/AJzv2t+SkbK3DGN5OszB+CslOUAP9lP5tTvHySVySAiFKVAFSCCPKd5MEcVEO9bUxnncPLVAV3Y6abUS/wBeKFuz/jZwVd828UmF5IkAwNpSnB+3Hcs7bjqYRowQOJzXCWupJWve9qLi4k5uJJ4rDfvRJ7O/oQ3oDifioMbI6x4K2keaAd2ajoQetMhdyDnr0u5q2QE9XX2Lzy5qMvld5dDMD43rDLL5Orp4/F0hfkse3tko91WFQaZcYUZXuml449t2zBRDWyVxfKB+bj1+ULvb1p4Whefco3DGGjZrxUdLH5K6uXxYTh67FaRzYUHBWxELrrhihggFE2O1uY4PbkWnJDP8U9JBvSbvvxlVgnJw2HbvEjUHxhbl1WoPYWgzhyB15v4fl2LyuwVy12RhdLYbUWw9hII6QnZt+nBY5WytJjLHelJZVC8SQJgomzW9rzEQdgTxylRcbBoKk0+pKrBSDlpKlbi7EpUQnTIu2OwFJJJBohImNE2L18k4VJO07UHaL1Y12ABzjB0Ajv8AorrbUwscewcTkucYOfH8s95+im1UjRp2p4aGgwPj3rFv2qMEE5kz3LRK5/lE8kYRqASflxKLwcchbKuIzvVDBMBPW1+CnS3fFMkmnODodOrcpM2jbu61VU+atoc4jfkDw3pB0dxUMztj5Lr7O2SDEQud5M1mBzmkjEcwNvr5LtaTBAK5Lb3V6GEnbDV9hRl3MEShqtOQpUXFjZOxGNsyVlJcdQByntIb1nRo69p7F5dbamJ7jO1ddymtpDS4kSRhbv49QXFNbPDVb4Y+bXN1svExOBtUQJKd5nPYFW+oRltOZ6lbnKoyeiJjaqWData6KMzO1Wuu3WN6Uym9HcfbOLdq0bFbCwidN/zQ1WiW5EbUmaj4/JLKQ8XaWB8MbwCnStGAtfuce7EZ+CyrqtBDSw/h0O9vrJEMfLB1ie/NYWNXaYpzy6ipNPqfJA3TWx0mnaOaezLwhFg+v9LaVhZpdKSiDxTgrTZH9bUkySQOE4UAp4laWffL4a0bzPcPqsZhh/Fngf8A6R98VJeB7o+J9BZdpdDmO68J4Oy8YSqoJrPyyOazn2AFpJJJ9SibQ9X0jIHXkjRvObdSwPcDvQwdErR5TUXtqEmI6hHV3rKY5Engt+UwSdFdZjBCrbTcMwFdZnS4cUqcaFqe5j2PGToxds/VenXJam1aTXt0I7jtHevOr3oF3ssIJObcuAPkum5ENfTxse4AEgtE5zGfVuyWGXbZL7dHTuUtnp15aQs2125rjgJwkHnA5ZajPQypXtefs24g3EB0gCJHXwXF39f7KjcLWNJOZOrhvAMCFGM3W2WUk3QPKW1Ne84SIGngsF79g8fFVWisSfmqMS6scdRxZ5d12JL+/YNnEqLOc7fmr7Jdz3txALYuu6CHAuGinLKSFjLR102HC3PUo80M8kVQpwNFJzN8cVhjba2vDCvWkOa3aQT4DxIWGZaT1FdAXNqVyWultNscXHM8dR3LFtTM3cT4ra86RGhTfDcQ2Md5QtWnkxo3AeCyGtIYP5iB2StfZCxq5y2OT1bps/qA+B8lsgrl7qrYKrZMA5HtHzhdG61M99n7h81WPCMp5EtKmgm21nvs/cFMW1nvt7wtYgV61SQ4tdPY6eAJ8kkyOLMPff8AuKm2ys3HtOakCpNPBWlz1pjG6NJIHZl5IO3MlhA11HEaK7FOe9QquU+lRU5+JjXbwCrrM+W9qCsz+Y9vuOPcecPEjsVtieicmC5Q2QPyjbPfl64rnLRdGHozK7a8Bo7drw2oFtmzkp3LRdrkTdzxGa0rHdLsQkax5rpKVlaTojG2fMGEtbHDIt1LAGHrA78lJtQ6bVqWqyte5jH9Fz2tPVJAmdkaoy38k7Q3ohjx7wIYf6gcu0HsCwvT3bp0Y9SSTaN22n2oDXAOcIGYBmdNVPlDcrvZOcGtwgS6MiAMychsXJ2O961GqcLWSx+cyRzTBAOWWS2L95fOqUn0WUcD3gte4uxAA5OwAATInMxEqcccpdRWefjfp55bKEPIGeZz3phZDhxHeAO0rXsFB1V+AFodGXN1zA810tPkVaXsxvcwMbzzsJw5wBGa6t+o5de/Syw2AMptEbB3oylThXPyACZoWOX2a48EGhD17MDm4mBrnl2hENVF4vimRtdze/X4SlPB1iXNRxOe+YxEkcJy+EIK1WXnkbJW/dtHDPBZdpPPP6kZXgsZyhUZ/wAY/mnuBWm45IB/4OJ14FHCIU3g5ypL4cDuz7l1ww6hrd/Rb8lx9XVdRYKk02HqAnhl2aJY3RZQWHdQ4BoQ2M+0GnwGzcrA7hHZnxQ7n/etyjI6RuWmOXlFjUFQpIfEknstLgU1d8Mcf5T4JgVTbnQx3DxMLZDDCaoVNVVNqFhqbec/rDT/ANlGyOzIU2Hnkb2+BHzVFE89T7DUtbJagrM+WQdWnCfI93gVovEt7FlUxhf1OyPHYfW9LKbONCzaIpqGplEtKMb4GUV2oc3LXYu5uq3PexpLciAQeoiVxFUc1dbyXdioMM6At7iQPhCXGQ5xY9+8iKTy+qxz2k4n4GxBfBOW6SvKm0iBJ1K+iG0etc1V5B2Z9XGQ4AmSxrobPiOAIC37ZZ4Z21yf8PuTeN/tng4G5AaYnbp3Db1nqK9KvpwZZnkR0cI6sUNgd60bJZadNgawANAgADIDgFhcrrRFMNH4nD4An5JSdstFu9RxNZ2aduijU1TgLl9t025LNtlTE/CNGeO3yR1oqYGl27x2fFZtnacydTmpv6OfsZRyaSsC0nnH9S3nSGdi5+vr2+aMuYJxUrS+MH6j/wBSj6OizLWc2cT4LQs5yVXgvZqpzW7c1SacAjIkeB81g1RK1LlcQ1410O3bI8lnFZcNckoSs771nrYri71PyQlocPaMHn1FOXyitIVPQSVYcUk+4aGNPWh7xd92eI8QrgckJeh5n9Q8CupiyQVBym1RqIWBY+KrRva4eB8kwyf2qqofvqfHyKsrdNKFW0eihHUZKJZ0RwSZqleT9Gotk57EQEOekVe3RGtU97hnnJbPI60kB7Nzg4do+ixn6I3kmfvX8B/2UZXWUp4/Wu6ZXKmHlD0le3RdM8xlU53lcvytfmwfqPgAulcuU5Unns/T5lGX1ox5c6VYwqAT1DDCRrmuVuBt9XE/CNG5nj68UqYQlm6M7TmeKLs2qz5qvS+0mGLm6pz7V0Vu6K5ursRl9inB7a7NnE+C0rM7JZNq6bOB8lqWfRX/ABL+SbyjrqdDyJ1b4H6oCoirr6Y4HwWS7w2SfXyQNoH3jMtvkUc5AWk8+nx+aEDZSTJ1I0//2Q=="
                  alt="user"
                />
              )}

              <div>
                <h3>
                  {post.author}
                  <GoVerified
                    style={{
                      position: "absolute",
                      top: "4px",
                      left: "112px",
                      color: "#00a0f0",
                    }}
                  />
                </h3>
                <p>
                  {post.author === "Prajwal Jaiswal" && "CSE Community Head"}{" "}
                  {post.author === "Anita Chauhan" && "Professor"}{" "}
                  {post.author === "Hrishikesh Joshi" && "GSCE Student Head"} -{" "}
                  {moment(post.createdAt).fromNow()}
                </p>
              </div>
            </div>

            <div className="postContent">
              <p>{post.content}</p>
              {post.image && <img src={post.image} alt="post" />}
            </div>
            <div className="reactions">
              <span onClick={() => updatePartyCount(post._id)}>🎉</span>
              {post.partyReaction}
              <span onClick={() => updateLikeCount(post._id)}>❤️</span>
              {post.likeReaction}
              <span onClick={() => updateLitCount(post._id)}>🔥</span>
              {post.litReaction}
            </div>
          </div>
        );
      });
  };

  return (
    <>
      <div className="searchPosts">
        <input
          type="text"
          placeholder="Search Post..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <br />
      <hr />
      <br />
      {postList() === null && <p>Error</p>}
      <div className="posts">{postList()}</div>
    </>
  );
};

export default Posts;
