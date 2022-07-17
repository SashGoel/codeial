{let t=function(){let e=$("#new-post-form");e.submit(function(t){t.preventDefault(),$.ajax({type:"post",url:"/posts/create",data:e.serialize(),success:function(t){var e=o(t.data.post);$("#posts-list-container>ul").prepend(e),s($(" .delete-post-button",e)),new PostComments(t.data.post._id),new toggleLike($(" .toggle-like-button",e)),new notify({theme:"relax",text:"Post published!",type:"success",layout:"topright",timeout:1500}).show()},error:function(t){console.log(t.responseText)}})})},o=function(t){return $(`<li id="post-${t._id}">
                    <p>

                        <small>
                            <a class="delete-post-button" href="/posts/destroy/${t._id}">X</a>
                        </small>
            
                        ${t.content}
                        <br>
                        <small>
                            ${t.user.name}
                        </small>
                        <br>
                        <small>
                            
                                <a class="toggle-like-button" data-likes="0" href="/likes/toggle/?id=${t._id}&type= Post">
                                    0 Likes
                                </a> 

                        </small>
                    </p>
                    <div class="post-comments">

                        <form id="post-${t._id}-comments-form" action="/comments/create" method="POST">
                            <input type="text" name="content" placeholder="Type here to add comment..." required>
                            <input type="hidden" name="post" value="${t._id}" >
                            <input type="submit" value="Add Comment">
                        </form>
            
                        <div class="post-comments-list">
                            <ul id="post-comments-${t._id}">
                    
                            </ul>
                        </div>
               
                    </div>

                </li>`)},s=function(e){$(e).click(function(t){t.preventDefault(),$.ajax({type:"get",url:$(e).prop("href"),success:function(t){$("#post-"+t.data.post_id).remove()},error:function(t){console.log(t.responseText)}})})};t()}