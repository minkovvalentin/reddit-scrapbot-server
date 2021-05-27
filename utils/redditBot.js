/* Imports */
const snoowrap = require('snoowrap');
const config = require('../config/config');

/* Consts */
const SUBREDDIT_URL = (reddit) => `https://old.reddit.com/r/${reddit}`;

/* Initialize reddit api */
const redditApi = new snoowrap({
  userAgent: config.userAgent,
  clientId: config.clientId,
  clientSecret: config.clientSecret,
  refreshToken: config.refreshToken
});

const redditBot = {
    getPosts : async (subreddit, withComments, postNumber) => {

      let hotPosts = await redditApi.getSubreddit(subreddit).getHot({limit: postNumber}).map(post => {
        return {
          subreddit: post.subreddit.display_name,
          title: post.title,
          upvote_ratio: post.upvote_ratio,
          total_awards_received: post.total_awards_received,
          user_reports: post.user_reports,
          score: post.score,
          thumbnail: post.thumbnail,
          content_categories: post.content_categories,
          created: post.created,
          id: post.id,
          authorName: post.author.name,
          authorUrl: `www.reddit.com/user/${post.author.name}`,
          stickied: post.stickied,
          url: post.url,
          postTime: post.created_utc,
          comments: post.num_comments,
          commentsNum: 0
        }
      })
      //First two posts are reddit posts
      return hotPosts.slice(2, hotPosts.length-2)
  }
}

module.exports = redditBot;

// Fetching comments
// await redditApi.getSubmission(post.id).expandReplies()
// comments = comments.comments.map(comment => {
//   numOfComments = comments.comments.length
//   return {
//     total_awards_received: comment.total_awards_received,
//     score: comment.ups,
//     id: comment.id,
//     author: comment.author.name,
//     body: comment.body,
//     created: comment.created_utc,
//     replies: comment.replies ? comment.replies.map( firstReply => {
//       numOfComments += firstReply.replies
//       return {
//       total_awards_received: firstReply.total_awards_received,
//       score: firstReply.score,
//       id: firstReply.id,
//       author: firstReply.author.name,
//       body: firstReply.body,
//       created: firstReply.created_utc,
//       replies: firstReply.replies ? firstReply.replies.map(firstReplyReply => {
//         numOfComments += firstReplyReply.replies
//         return {
//         total_awards_received: firstReplyReply.total_awards_received,
//         score: firstReplyReply.score,
//         id: firstReplyReply.id,
//         author: firstReplyReply.author.name,
//         body: firstReplyReply.body,
//         created: firstReplyReply.created_utc,
//         replies: firstReplyReply.replies ? firstReplyReply.replies.map(secondReplyReply => {
//           numOfComments += secondReplyReply.replies
//           return {
//           total_awards_received: secondReplyReply.total_awards_received,
//           score: secondReplyReply.score,
//           id: secondReplyReply.id,
//           author: secondReplyReply.author.name,
//           body: secondReplyReply.body,
//           created: secondReplyReply.created_utc,
//           replies: secondReplyReply.replies ? secondReplyReply.replies.map(thirdReplyReply => {
//             numOfComments += thirdReplyReply.replies
//             return {
//             total_awards_received: thirdReplyReply.total_awards_received,
//             score: thirdReplyReply.score,// Fetching comments
// await redditApi.getSubmission(post.id).expandReplies()
// comments = comments.comments.map(comment => {
//   numOfComments = comments.comments.length
//   return {
//     total_awards_received: comment.total_awards_received,
//     score: comment.ups,
//     id: comment.id,
//     author: comment.author.name,
//     body: comment.body,
//     created: comment.created_utc,
//     replies: comment.replies ? comment.replies.map( firstReply => {
//       numOfComments += firstReply.replies
//       return {
//       total_awards_received: firstReply.total_awards_received,
//       score: firstReply.score,
//       id: firstReply.id,
//       author: firstReply.author.name,
//       body: firstReply.body,
//       created: firstReply.created_utc,
//       replies: firstReply.replies ? firstReply.replies.map(firstReplyReply => {
//         numOfComments += firstReplyReply.replies
//         return {
//         total_awards_received: firstReplyReply.total_awards_received,
//         score: firstReplyReply.score,
//         id: firstReplyReply.id,
//         author: firstReplyReply.author.name,
//         body: firstReplyReply.body,
//         created: firstReplyReply.created_utc,
//         replies: firstReplyReply.replies ? firstReplyReply.replies.map(secondReplyReply => {
//           numOfComments += secondReplyReply.replies
//           return {
//           total_awards_received: secondReplyReply.total_awards_received,
//           score: secondReplyReply.score,
//           id: secondReplyReply.id,
//           author: secondReplyReply.author.name,
//           body: secondReplyReply.body,
//           created: secondReplyReply.created_utc,
//           replies: secondReplyReply.replies ? secondReplyReply.replies.map(thirdReplyReply => {
//             numOfComments += thirdReplyReply.replies
//             return {
//             total_awards_received: thirdReplyReply.total_awards_received,
//             score: thirdReplyReply.score,
//             id: thirdReplyReply.id,
//             author: thirdReplyReply.author.name,
//             body: thirdReplyReply.body,
//             created: thirdReplyReply.created_utc,
//             replies: thirdReplyReply.replies ? thirdReplyReply.replies.map(fourthReplyReply => {
//               numOfComments += fourthReplyReply.replies
//               return {
//               total_awards_received: fourthReplyReply.total_awards_received,
//               score: fourthReplyReply.score,
//               id: fourthReplyReply.id,
//               author: fourthReplyReply.author.name,
//               body: fourthReplyReply.body,
//               created: fourthReplyReply.created_utc,
//               replies: fourthReplyReply.replies ? fourthReplyReply.replies.map(fifthReplayReplay => {
//                 numOfComments += fifthReplayReplay.replies++
//                 return {
//                 total_awards_received: fifthReplayReplay.total_awards_received,
//                 score: fifthReplayReplay.score,
//                 id: fifthReplayReplay.id,
//                 author: fifthReplayReplay.author.name,
//                 body: fifthReplayReplay.body,
//                 created: fifthReplayReplay.created_utc,
//                 replies: fifthReplayReplay.replies ? fifthReplayReplay.replies.map(sixthReplayReplay => {
//                   numOfComments += sixthReplayReplay.replies
//                   return {
//                   total_awards_received: sixthReplayReplay.total_awards_received,
//                   score: sixthReplayReplay.score,
//                   id: sixthReplayReplay.id,
//                   author: sixthReplayReplay.author.name,
//                   body: sixthReplayReplay.body,
//                   created: sixthReplayReplay.created_utc,
//                   }}) : []
//                 }}) : []
//               }}) : []
//             }}) : []
//           }}) : []
//         }}) : []
//       }
//     }) : []
//   } 
// });

//             id: thirdReplyReply.id,
//             author: thirdReplyReply.author.name,
//             body: thirdReplyReply.body,
//             created: thirdReplyReply.created_utc,
//             replies: thirdReplyReply.replies ? thirdReplyReply.replies.map(fourthReplyReply => {
//               numOfComments += fourthReplyReply.replies
//               return {
//               total_awards_received: fourthReplyReply.total_awards_received,
//               score: fourthReplyReply.score,
//               id: fourthReplyReply.id,
//               author: fourthReplyReply.author.name,
//               body: fourthReplyReply.body,
//               created: fourthReplyReply.created_utc,
//               replies: fourthReplyReply.replies ? fourthReplyReply.replies.map(fifthReplayReplay => {
//                 numOfComments += fifthReplayReplay.replies++
//                 return {
//                 total_awards_received: fifthReplayReplay.total_awards_received,
//                 score: fifthReplayReplay.score,
//                 id: fifthReplayReplay.id,
//                 author: fifthReplayReplay.author.name,
//                 body: fifthReplayReplay.body,
//                 created: fifthReplayReplay.created_utc,
//                 replies: fifthReplayReplay.replies ? fifthReplayReplay.replies.map(sixthReplayReplay => {
//                   numOfComments += sixthReplayReplay.replies
//                   return {
//                   total_awards_received: sixthReplayReplay.total_awards_received,
//                   score: sixthReplayReplay.score,
//                   id: sixthReplayReplay.id,
//                   author: sixthReplayReplay.author.name,
//                   body: sixthReplayReplay.body,
//                   created: sixthReplayReplay.created_utc,
//                   }}) : []
//                 }}) : []
//               }}) : []
//             }}) : []
//           }}) : []
//         }}) : []
//       }
//     }) : []
//   } 
// });
