import requests as r
import json
import os
import base64

#
#
# EDIT : xxx
# 
# 

obj = {"message": "","type":"alert", "percentage": 1}
def messages(msg_obj):
    method = msg_obj["method"]
    if method == "set":
        obj["message"] = msg_obj["message"]
        obj["type"] = msg_obj["type"]
        obj["percentage"] = msg_obj["percentage"]
        open("messages.txt", "a").write(f"{obj['message']}\n")
    else:
        return obj
def save_userData(userData,user):
    print("\r > Save Data...", " "*20, end="")
    with open(f'static/data/{user}.json', 'w') as file:
        json.dump(userData, file, sort_keys=True, indent=2)
        file.close()


def get_image_base64(url):
    try:
        response = r.request("GET", url).content
        image_base64 = "data:image/jpeg;base64," + base64.b64encode(response).decode('utf-8')
        return image_base64
    except:
        return url


def get_info(user):
    print(f"\r > Looking For {user}...", " "*20, end="")
    messages({"method": "set", "message": f"Looking For {user}...", "type":"load","percentage": 0.05})
    url = f"https://www.instagram.com/api/v1/users/web_profile_info/?username={user}"
    headers = {
        "cookie": "mid=xxx;ig_did=xxx; ig_nrcb=1; csrftoken=xxx; ds_user_id=xxx; sessionid=xxx; shbid='xx'; shbts='xxx'; rur='xxxx'",
        "referer": "https://www.instagram.com/",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
        "x-asbd-id": "xxx",
        "x-ig-app-id": "xx",
    }
    response = r.request("GET", url, headers=headers)
    data = json.loads(response.text)
    id = data["data"]["user"]["id"]
    full_name = data["data"]["user"]["full_name"]
    username = data["data"]["user"]["username"]
    profile_pic_url = data["data"]["user"]["profile_pic_url"]
    biography = data["data"]["user"]["biography"]
    edge_followed_by = data["data"]["user"]["edge_followed_by"]
    edge_follow = data["data"]["user"]["edge_follow"]
    edge_owner_to_timeline_media = data["data"]["user"]["edge_owner_to_timeline_media"]
    def get_followers(id):
        print("\r > Get followers...", " "*20, end="")
        messages({"method": "set", "message": "Get followers...", "type":"load","percentage": 0.3})
        url = f"https://www.instagram.com/api/v1/friendships/{id}/followers/"
        response = r.request("GET", url, headers=headers)
        followers = json.loads(response.text)["users"]
        return followers

    def get_following(id):
        print("\r > Get following...", " "*20, end="")
        messages({"method": "set", "message": "Get users following...", "type":"load","percentage": 0.5})
        url = f"https://www.instagram.com/api/v1/friendships/{id}/following/"
        response = r.request("GET", url, headers=headers)
        following = json.loads(response.text)["users"]
        return following

    def get_friend(users, list):
        print("\r > Get friend...", " "*20, end="")
        messages({"method": "set", "message": "Get users not follow back...", "type":"load","percentage": 0.6})
        friend = []
        for user in list:
            if user["username"] in users:
                friend.append(user)
        return friend

    def get_not_follow_back(users, list):
        print("\r > Get users not follow back...", " "*20, end="")
        messages({"method": "set", "message": "Get users not follow back...", "type":"load","percentage": 0.7})
        not_follow_back = []
        for user in list:
            if user["username"] not in users:
                not_follow_back.append(user)
        return not_follow_back

    def get_not_following_you(users, list):
        print("\r > Get users not following...", " "*20, end="")
        messages({"method": "set", "message": "Get users not following...", "type":"load","percentage": 0.8})
        not_following_you = []
        for user in list:
            if user["username"] not in users:
                not_following_you.append(user)
        return not_following_you

    def get_posts(id):
        print("\r > Get Posts...", " "*20, end="")
        messages({"method": "set", "message": f"Get Posts...", "type":"load","percentage": 0.9})
        url = f"https://www.instagram.com/api/v1/feed/user/{id}/"
        response = r.request("GET", url, headers=headers)
        posts = json.loads(response.text)["items"]
        return posts
    #download images [profiles,posts]
    def download_image(name,url):
        downloaded = [file.split('.')[0] for file in os.listdir('static/data/pics') if file.endswith(".jpg")]
        if name not in downloaded:
            response = r.request("GET", url, headers=headers)
            #open(f'static/data/pics/{name}.jpg', 'wb').write(response.content)
            downloaded.append(name)


    results = dict()
    results["id"] = id
    results["full_name"] = full_name
    results["username"] = username
    results["profile_pic_url"] = profile_pic_url
    results['profile_pic_base64'] = get_image_base64(profile_pic_url)
    results["biography"] = biography
    results["count_followed_by"] = edge_followed_by["count"]
    results["count_follow"] = edge_follow["count"]
    results["count_owner_to_timeline_media"] = edge_owner_to_timeline_media["count"]
    results["followers"] = get_followers(id)
    results["following"] = get_following(id)
    users_followers = [user["username"] for user in results["followers"]]
    users_following = [user["username"] for user in results["following"]]
    results["friend"] = get_friend(users_followers, results["following"])
    results["not_follow_back"] = get_not_follow_back(users_following, results["followers"])
    results["not_following_you"] = get_not_following_you(users_followers, results["following"])
    results["posts"] = get_posts(id)
    save_userData(results, user)
    print(f"\r > Get {user} Information Done."," "*20, end="")
    messages({"method": "set", "message": f"Get {user} Information Done.", "type":"load","percentage": 1})

    #download images
    #for user in results["followers"]  : download_image(user["username"],user["profile_pic_url"])
    #for user in results["following"]  : download_image(user["username"],user["profile_pic_url"])
    #for post in results["posts"]  : download_image(post["pk"],post["image_versions2"]["candidates"][0]["url"])
